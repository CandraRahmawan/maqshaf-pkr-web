import { useQuery } from 'react-query';
import { fetchApiClient } from 'helpers/fetchApi.helper';

const useGetAllProductHook = () => {
  const { data, isLoading } = useQuery('listAllProduct', () =>
    fetchApiClient(`/mastergood/all`, 'GET')
  );
  return { data, isLoading };
};

export default useGetAllProductHook;
