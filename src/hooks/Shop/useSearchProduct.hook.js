import { useState } from 'react';
import { useQuery } from 'react-query';
import { fetchApiClient } from 'helpers/fetchApi.helper';

const useSearchProductHook = () => {
  const [keyword, setKeyword] = useState('');
  const { data: goodList, isLoading } = useQuery(['listProduct', keyword], () =>
    fetchApiClient(`/mastergood/search`, 'GET', {
      name: keyword,
    })
  );
  return { goodList, isLoading, setKeyword };
};

export default useSearchProductHook;
