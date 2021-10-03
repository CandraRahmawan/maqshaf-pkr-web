import { useQuery } from 'react-query';
import { fetchApiClient } from 'helpers/fetchApi.helper';
import useTableHook from '../useTable.hook';
import { useEffect } from 'react';

const useGetAllProductHook = (history) => {
  const { data, isLoading, refetch: refetchAll } = useQuery('listAllProduct', () =>
    fetchApiClient(`/mastergood/all`, 'GET', {
      limit: pageSummary.limit,
      page: pageSummary.page
    }),
    {
      refetchOnMount: "always"
    }
  );

  const { data: dataSearch, isLoading: isLoadingSearch, refetch: refetchSearch } = useQuery('listAllProductSearch', () =>
    fetchApiClient(`/mastergood/search`, 'GET', {
      name: searchValue.name,
      limit: pageSummary.limit,
      page: pageSummary.page
    }),
    { enabled: false }
  );

  useEffect(() => {
    if (history.location.search) {
      setTimeout(() => {
        history.replace('/dashboard/produk')
      }, 2500)
    }
  }, [history.location.search])

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
    data: responseData,
    isLoading: isLoading || isLoadingSearch,
    pageSummary,
    handleSearch,
    handleChange,
    getPaginationTotal,
    handleChangePage
  };

};

export default useGetAllProductHook;
