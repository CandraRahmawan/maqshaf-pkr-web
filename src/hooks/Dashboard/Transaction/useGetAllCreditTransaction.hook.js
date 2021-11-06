import { fetchApiClient } from 'helpers/fetchApi.helper';
import { useQuery } from 'react-query';
import moment from 'moment';
import { useEffect, useState } from 'react';
import useTableHook from '../useTable.hook';

const useGetAllCreditTransactionHook = () => {
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

  const { data, isLoading, refetch: refetchAll } = useQuery('getCreditTransactions', () =>
    fetchApiClient(`/deposit/all`, 'GET', {
      limit: pageSummary.limit,
      page: pageSummary.page,
      transactionCode: searchValue.trxCode,
      year,
      month
    })
  );


  useEffect(() => {
    generateArrayOfYears() 
  }, [])

  const {
    searchValue,
    setSearchValue,
    pageSummary,
    handleSearch,
    handleChange,
    handleChangePage,
    getPaginationTotal
  } = useTableHook(data, refetchAll)

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

  const handleSearchTable = (e) => {
    handleSearch(e)
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
    month,
    year,
    handleHeaderFilter,
    listYears: generateArrayOfYears(),
  };

};

export default useGetAllCreditTransactionHook;
