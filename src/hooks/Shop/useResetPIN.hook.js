import { useEffect } from 'react';
import { useMutation } from 'react-query';
import { fetchApiClient } from 'helpers/fetchApi.helper';
import messageAlert from 'helpers/messageAlert.helper';

const useResetPINHook = (history, setAlert, t, userId) => {
  const {
    data,
    error,
    isLoading,
    mutate,
  } = useMutation((data) => fetchApiClient(`/user/update-pin/${userId}`, 'PUT', data));

  useEffect(() => {
    if (data) {
      void messageAlert.success({
        title: t('search_product:alert.successReset'),
        text: data?.message,
        href: '/',
      });
    }

    if (error) {
      setAlert({
        isShow: true,
        type: 'error',
        message: error?.message || t('search_product:alert.errorReset')
      });
    }
  }, [data]);

  return {
    data,
    error,
    isLoading,
    mutate,
  };
};

export default useResetPINHook;
