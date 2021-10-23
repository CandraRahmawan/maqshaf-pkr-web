import { useQuery } from 'react-query';
import { fetchApiClient } from 'helpers/fetchApi.helper';
import useTableHook from '../useTable.hook';
import { useEffect, useState } from 'react';

const useGetAllProductHook = (history) => {
  const [alert, setAlert] = useState({
    isShow: false,
    type: 'success',
    message: 'common:alert.success'
  })
  const { data, isLoading, refetch: refetchAll } = useQuery('listAllProduct', () =>
    fetchApiClient(`/mastergood/all`, 'GET', {
      name: searchValue.name,
      limit: pageSummary.limit,
      page: pageSummary.page,
      status: searchValue.status,
    }),
    {
      refetchOnMount: true,
      refetchOnWindowFocus: true,
    }
  );

  useEffect(() => {
    if (history.location.state?.success) {
      history.replace('/dashboard/produk');
      setAlert({
        isShow: true,
        type: 'success',
        message: 'common:alert.success'
      })
    }
  }, [history.location.state])

  useEffect(() => {
    if (alert.isShow) {
      setTimeout(() => {
        setAlert({ ...alert, isShow: false })
      }, 5000)
    }
  }, [alert])

  const {
    searchValue,
    pageSummary,
    handleSearch,
    handleChange,
    handleChangePage,
    getPaginationTotal
  } = useTableHook(data, refetchAll)

  return {
    alert,
    data,
    isLoading,
    pageSummary,
    refetchSearch: refetchAll,
    handleSearch,
    refetch: refetchAll,
    handleChange,
    getPaginationTotal,
    handleChangePage
  };

};

export default useGetAllProductHook;
