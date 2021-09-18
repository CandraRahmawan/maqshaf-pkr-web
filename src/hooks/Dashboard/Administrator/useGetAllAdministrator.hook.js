import { useEffect } from 'react';
import { fetchApiClient } from 'helpers/fetchApi.helper';
import { useMutation, useQuery } from 'react-query';
import useTableHook from '../useTable.hook';

const useGetAllAdministratorHook = () => {
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
