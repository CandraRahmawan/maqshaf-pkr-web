import { useEffect } from 'react';
import { fetchApiClient } from 'helpers/fetchApi.helper';
import { useMutation, useQuery } from 'react-query';
import useTableHook from '../useTable.hook';

const useGetAllAdministratorHook = (history) => {
  const { data, isLoading, refetch } = useQuery('listAllAdministrator', () =>
    fetchApiClient(`/administrator/all`, 'GET', {
      limit: pageSummary.limit,
      page: pageSummary.page
    }),
    {
      refetchOnMount: "always"
    }
  );

  const { mutate } = useMutation('administratorMutationUpdate', (id) =>
    fetchApiClient(`/administrator/delete/${id}`, 'DELETE', {})
  )

  useEffect(() => {
    if (history.location.search) {
      setTimeout(() => {
        history.replace('/dashboard/administrator')
      }, 2500)
    }
  }, [history.location.search])

  const {
    responseData,
    pageSummary,
    handleChangePage,
    getPaginationTotal
  } = useTableHook(
    { data, refetch },
  )

  const handleDelete = (id) => {
    mutate(id)
    setTimeout(() => {
      refetch()
    }, 0)
  }

  return { data: responseData, isLoading, refetch, handleDelete, pageSummary, getPaginationTotal, handleChangePage };
};

export default useGetAllAdministratorHook;
