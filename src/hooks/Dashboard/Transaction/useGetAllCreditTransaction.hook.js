import { fetchApiClient } from 'helpers/fetchApi.helper';
import { useQuery } from 'react-query';
import moment from 'moment';
import { useEffect, useState } from 'react';
import useTableHook from '../useTable.hook';

const useGetAllCreditTransactionHook = () => {
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

  const { data, isLoading, refetch: refetchAll } = useQuery('getCreditTransactions', () =>
    fetchApiClient(`/deposit/all`, 'GET', {
      limit: pageSummary.limit,
      page: pageSummary.page,
      year,
      month
    })
  );

  const { data: dataSearch, isLoading: isLoadingSearch, refetch: refetchSearch } = useQuery('getCreditTransactionsSearch', () =>
    fetchApiClient(`/deposit/search`, 'GET', {
      transactionCode: searchValue.trxCode,
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


  const {
    responseData,
    searchValue,
    setSearchValue,
    pageSummary,
    handleSearch,
    handleChange,
    handleChangePage,
    getPaginationTotal
  } = useTableHook(
    { data, refetch: refetchAll },
    { data: dataSearch, refetch: refetchSearch }
  )

  const handleHeaderFilter = (val, type) => {
    if (type === 'M') {
      setMonth(val)
    } else {
      setYear(val)
    }
  }

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
    month,
    year,
    handleHeaderFilter,
    listYears: generateArrayOfYears(),
  };

};

export default useGetAllCreditTransactionHook;
