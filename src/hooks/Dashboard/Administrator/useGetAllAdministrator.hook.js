import { useQuery, useMutation } from 'react-query';
import { fetchApiClient } from 'helpers/fetchApi.helper';

const useGetAllAdministratorHook = () => {
  const { data, isLoading, refetch } = useQuery('listAllAdministrator', () =>
    fetchApiClient(`/administrator/all`, 'GET')
  );


  const { mutate } = useMutation('administratorMutationUpdate', (id) =>
    fetchApiClient(`/administrator/delete/${id}`, 'DELETE', {})
  )

  const handleDelete = (id) => {
    mutate(id)
    setTimeout(() => {
      refetch()
    }, 0)
  }

  return { data, isLoading, refetch, handleDelete };
};

export default useGetAllAdministratorHook;
