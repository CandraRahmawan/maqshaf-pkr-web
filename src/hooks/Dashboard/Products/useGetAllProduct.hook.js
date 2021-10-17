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
      limit: pageSummary.limit,
      page: pageSummary.page,
      status: searchValue.status,
    }),
    {
      refetchOnMount: "always"
    }
  );

  const { data: dataSearch, isLoading: isLoadingSearch, refetch: refetchSearch } = useQuery('listAllProductSearch', () =>
    fetchApiClient(`/mastergood/search`, 'GET', {
      name: searchValue.name,
      status: searchValue.status,
      limit: pageSummary.limit,
      page: pageSummary.page
    }),
    { enabled: false }
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
      }, 3000)
    }
  }, [alert])

  const {
    responseData,
    searchValue,
    pageSummary,
    handleSearch,
    handleChange,
    handleChangePage,
    getPaginationTotal
  } = useTableHook(
    { data, refetch: refetchAll },
    { data: dataSearch, refetch: refetchSearch }
  )

  return {
    alert,
    data: responseData,
    isLoading: isLoading || isLoadingSearch,
    pageSummary,
    refetchSearch,
    handleSearch,
    refetch: refetchAll,
    handleChange,
    getPaginationTotal,
    handleChangePage
  };

};

export default useGetAllProductHook;
