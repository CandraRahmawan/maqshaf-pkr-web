import { useEffect, useState } from 'react';
import { useMutation } from 'react-query';
import { fetchApiClient } from 'helpers/fetchApi.helper';
import { IS_OK } from 'constants/httpStatus.constant';
import { setAuth } from 'helpers/auth.helper';

const useSubmitLoginHook = (history) => {
  const [showAlert, setShowAlert] = useState(false);
  const { data, error, isLoading, mutate } = useMutation('listAllUser', (requestData) =>
    fetchApiClient(`/administrator/login`, 'POST', requestData)
  );

  const handleSubmit = (event) => {
    event.preventDefault();
    const username = event.target[0].value;
    const password = event.target[1].value;
    mutate({ username, password });
  };

  useEffect(() => {
    if (IS_OK(data)) {
      setAuth(data);
      history.replace('/dashboard');
    }

    if (error) {
      setShowAlert(true);
    }
  }, [data, error]);

  return { error, isLoading, handleSubmit, showAlert, setShowAlert };
};

export default useSubmitLoginHook;
