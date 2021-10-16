import { fetchApiClient } from 'helpers/fetchApi.helper';
import moment from 'moment';
import { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import useTableHook from '../useTable.hook';

const useGetAllDebetTransactionHook = () => {
  const [open, setOpen] = useState(false);
  const [selectedData, setSelectedData] = useState({})
  const [month, setMonth] = useState(0)
  const [year, setYear] = useState(0)

  function generateArrayOfYears() {
    var max = year
    var min = 2021
    var years = []
  
    for (var i = max; i >= min; i--) {
      years.push(i)
    }
    return years
  }

  const { data, isLoading, refetch: refetchAll } = useQuery(['getDebetTransactions'], () =>
    fetchApiClient(`/debet/all`, 'GET', {
      limit: pageSummary.limit,
      page: pageSummary.page,
      year,
      month
    }),
  );

  const { data: dataSearch, isLoading: isLoadingSearch, refetch: refetchSearch } = useQuery(['getDebetTransactionsSearch'], () =>
    fetchApiClient(`/debet/search`, 'GET', {
      transactionCode: searchValue.trxCode,
      nis: searchValue.nis,
      limit: pageSummary.limit,
      page: pageSummary.page
    }),
    { enabled: false }
  );

  useEffect(() => {
    refetchAll()
    generateArrayOfYears() 
    setMonth(moment().month()+1)
    setYear(moment().year())
  }, [])


  const handleHeaderFilter = (val, type) => {
    if (type === 'M') {
      setMonth(val)
    } else {
      setYear(val)
    }
  }

  const handleOpen = (selected) => {
    setSelectedData(selected)
    setOpen(true)
  }

  const {
    responseData,
    searchValue,
    pageSummary,
    handleSearch,
    handleChange,
    handleChangePage,
    getPaginationTotal,
    setSearchValue
  } = useTableHook(
    { data, refetch: refetchAll },
    { data: dataSearch, refetch: refetchSearch }
  )

  const handleSearchByDate = () => {
    setSearchValue({})
    refetchAll()
  }

  return {
    searchValue,
    refetchAll: handleSearchByDate,
    data: responseData,
    isLoading: isLoading || isLoadingSearch,
    pageSummary,
    handleSearch,
    handleChange,
    getPaginationTotal,
    handleChangePage,
    handleOpen,
    selectedData,
    setOpen,
    open,
    month,
    year,
    handleHeaderFilter,
    listYears: generateArrayOfYears(),
  };
};

export default useGetAllDebetTransactionHook;
