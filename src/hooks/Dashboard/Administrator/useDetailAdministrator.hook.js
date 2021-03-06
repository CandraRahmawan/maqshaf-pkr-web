import { useState, useEffect } from 'react';
import { useFormik } from 'formik';
import { get, isEmpty } from 'lodash';
import { IS_OK } from 'constants/httpStatus.constant';
import { useMutation, useQuery } from 'react-query';
import { fetchApiClient } from 'helpers/fetchApi.helper';
import * as yup from 'yup';

const useDetailAdministratorHook = (t, history, id) => {
  const validationPass = id === 'add' ? {
    password: yup.string().required(t('dashboard_administrator:validation.passwordRequired')),
    repassword: yup.string().required(t('dashboard_administrator:validation.repasswordRequired'))
    .oneOf([yup.ref('password'), null], t('dashboard_administrator:validation.matchPasswordConfirm'))
  } : null
  
  const validationSchema = yup.object({
    fullName: yup.string().required(t('dashboard_administrator:validation.fullNameRequired')),
    username: yup.string().required(t('dashboard_administrator:validation.usernameRequired')),
    ...validationPass
  });

  const [togglePassword, setTogglePassword] = useState({
    password: false,
    repassword: false
  })

  const [showAlert, setShowAlert] = useState(false);

  const { data: dataUser } = useQuery(['getDetailAdministrator', id], () => fetchApiClient(`/administrator/${id}`, 'GET'),
    {
      enabled: id !== 'add',
      refetchOnMount: "always"
    }
  );

  const { data, error, isLoading, mutate } = useMutation('administratorMutation', (requestData) =>
    fetchApiClient(`/administrator/add`, 'POST', requestData)
  )

  const { data: dataUpdate, error: errorUpdate, isLoading: isLoadingUpdate, mutate: mutateUpdate } = useMutation('administratorMutationUpdate', (requestData) =>
    fetchApiClient(`/administrator/update/${id}`, 'PUT', requestData)
  )

  const formik = useFormik({
    initialValues: {
      fullName: '',
      username: '',
      password: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      if (id !== 'add') {
        mutateUpdate(values)
      } else {
        mutate(values);
      }
    },
  });

  useEffect(() => {
    if (!isEmpty(dataUser?.data)) {
      const user = get(dataUser, 'data.[0]', {})
      const { fullName, password, username } = user;
      formik.setFieldValue('fullName', fullName)
      formik.setFieldValue('password', password)
      formik.setFieldValue('username', username)
    }
  }, [dataUser?.data])

  useEffect(() => {
    if (IS_OK(data) || IS_OK(dataUpdate)) {
      history.replace('/dashboard/administrator', { success: true });
    }

    if (error || errorUpdate) {
      setShowAlert(true);
      window.scrollTo(0, 0)
    }
  }, [data, dataUpdate, error, errorUpdate]);

  const handleTogglePassword = (name) => {
    setTogglePassword({
      ...togglePassword,
      [name]: !togglePassword[name]
    })
  }

  return {
    error: error || errorUpdate,
    isLoading: isLoading || isLoadingUpdate,
    formik,
    showAlert,
    togglePassword,
    handleTogglePassword
  };
};

export default useDetailAdministratorHook;
