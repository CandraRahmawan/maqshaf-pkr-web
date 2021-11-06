import { useState, useEffect } from 'react';
import { useFormik } from 'formik';
import { get, isEmpty } from 'lodash';
import { IS_OK } from 'constants/httpStatus.constant';
import { useMutation, useQuery } from 'react-query';
import { fetchApiClient } from 'helpers/fetchApi.helper';
import * as yup from 'yup';

const useDetailUserHook = (t, history, id) => {
  const validationSchema = yup.object({
    nis: yup.string()//.length(16, t('dashboard_user:validation.nisLength'))
      .matches(/^[0-9]+$/, t('dashboard_user:validation.nisFormat'))
      .required(t('dashboard_user:validation.nisRequired')),
    fullName: yup.string().required(t('dashboard_user:validation.fullNameRequired')),
    class: yup.string().required(t('dashboard_user:validation.classRequired')),
    address: yup.string().required(t('dashboard_user:validation.addressRequired')),
  });

  const [showAlert, setShowAlert] = useState(false);
  const [showQRReader, setShowQRReader] = useState(false);

  const { data: dataUser } = useQuery(['getDetailUser', id], () => fetchApiClient(`/user/${id}`, 'GET'),
    {
      enabled: id !== 'add',
      refetchOnMount: "always"
    }
  );

  const { data, error, isLoading, mutate } = useMutation('userMutation', (requestData) =>
    fetchApiClient(`/user/add`, 'POST', requestData)
  )

  const { data: dataUpdate, error: errorUpdate, isLoading: isLoadingUpdate, mutate: mutateUpdate } = useMutation('userMutationUpdate', (requestData) =>
    fetchApiClient(`/user/update/${id}`, 'PUT', requestData)
  )

  const formik = useFormik({
    initialValues: {
      nis: '',
      fullName: '',
      class: '',
      address: '',
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

  const handleScan = (data) => {
    if (data) {
      formik.setFieldValue('nis', data)
      setShowQRReader(false)
    }
  }

  const handleScanError = () => {
    setShowQRReader(false)
  };


  useEffect(() => {
    if (!isEmpty(dataUser?.data)) {
      const user = get(dataUser, 'data.[0]', {})
      const { nis, fullName, address, pin } = user;
      formik.setFieldValue('nis', nis)
      formik.setFieldValue('fullName', fullName)
      formik.setFieldValue('address', address)
      formik.setFieldValue('class', user.class)
    }
  }, [dataUser?.data])

  useEffect(() => {
    if (IS_OK(data) || IS_OK(dataUpdate)) {
      history.replace('/dashboard/santri', { success: true });
    }

    if (error || errorUpdate) {
      setShowAlert(true);
    }
  }, [data, dataUpdate, error, errorUpdate]);

  return {
    error: error || errorUpdate,
    isLoading: isLoading || isLoadingUpdate,
    formik,
    showAlert,
    showQRReader,
    setShowQRReader,
    handleScan,
    handleScanError
  };
};

export default useDetailUserHook;
