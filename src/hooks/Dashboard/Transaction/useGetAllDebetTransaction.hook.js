import { fetchApiClient } from 'helpers/fetchApi.helper';
import moment from 'moment';
import { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import useTableHook from '../useTable.hook';

const useGetAllDebetTransactionHook = () => {
  const [open, setOpen] = useState(false);
  const [selectedData, setSelectedData] = useState({})
  const [month, setMonth] = useState(moment().month()+1)
  const [year, setYear] = useState(moment().year())

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
      transactionCode: searchValue.trxCode,
      nis: searchValue.nis,
      year,
      month
    }),
  );

  useEffect(() => {
    generateArrayOfYears() 
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
    searchValue,
    pageSummary,
    handleSearch,
    handleChange,
    handleChangePage,
    getPaginationTotal,
    setSearchValue
  } = useTableHook(data, refetchAll)

  const handleSearchByDate = () => {
    setSearchValue({})
    refetchAll()
  }

  const handleSearchTable = (e) => {
    handleSearch(e)
  }

  const handleDownload = () => {
    fetchApiClient(`/print/invoice`, 'GET', {
      year,
      month,
      name: 'Invoice'
    }, false, true).then((res) => console.log('res', res))
  }
  
  return {
    searchValue,
    refetchAll: handleSearchByDate,
    data,
    isLoading,
    pageSummary,
    handleSearch: handleSearchTable,
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
    handleDownload,
  };
};

export default useGetAllDebetTransactionHook;
