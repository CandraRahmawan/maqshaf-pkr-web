import { fetchApiClient } from 'helpers/fetchApi.helper';
import { useQuery } from 'react-query';
import moment from 'moment';
import { useEffect, useState } from 'react';

const useDashboardHook = (history) => {
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

  useEffect(() => {
    generateArrayOfYears() 
  }, [])

  const { data } = useQuery('dashboardTrx', () =>
    fetchApiClient(`/transactions/dashboard/all`, 'GET', {}),
    {
      refetchOnMount: true,
      refetchOnWindowFocus: true,
    }
  );

  const { data: dataMonthly, refetch, isLoading } = useQuery('dashboardTrxMonthly', () =>
  fetchApiClient(`/transactions/dashboard`, 'GET', {
    year,
    month,
  }),
  {
    refetchOnMount: true,
    refetchOnWindowFocus: true,
  }
);

  const handleHeaderFilter = (val, type) => {
    if (type === 'M') {
      setMonth(val)
    } else {
      setYear(val)
    }
  }

  const handleSearch = () => {
    refetch()
  }

  console.log('dataMonthly', dataMonthly)

  return {
    data: data?.data,
    month,
    year,
    isLoading,
    handleHeaderFilter,
    listYears: generateArrayOfYears(),
    handleSearch,
    dataMonthly: dataMonthly?.data
  };

};

export default useDashboardHook;
