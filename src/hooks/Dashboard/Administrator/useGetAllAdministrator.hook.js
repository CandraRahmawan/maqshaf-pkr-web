import { useQuery } from 'react-query';
import { fetchApiClient } from 'helpers/fetchApi.helper';

const useGetAllAdministratorHook = () => {
  const { data, isLoading } = useQuery('listAllAdministrator', () =>
    fetchApiClient(`/administrator/all`, 'GET')
  );
  return { data, isLoading };
};

export default useGetAllAdministratorHook;