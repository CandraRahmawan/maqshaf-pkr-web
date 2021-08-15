import { useQuery } from 'react-query';
import { fetchApiClient } from 'helpers/fetchApi.helper';

const useGetAllUserHook = () => {
  const { data, isLoading } = useQuery('listAllUser', () => fetchApiClient(`/user/all`, 'GET'));
  return { data, isLoading };
};

export default useGetAllUserHook;
