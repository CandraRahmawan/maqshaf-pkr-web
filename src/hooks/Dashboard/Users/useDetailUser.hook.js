import { useState, useEffect } from 'react';
import { useFormik } from 'formik';
import { get, isEmpty } from 'lodash';
import { IS_OK } from 'constants/httpStatus.constant';
import { useMutation, useQuery } from 'react-query';
import { fetchApiClient } from 'helpers/fetchApi.helper';
import * as yup from 'yup';

const useGetAllUserHook = (t, history, id) => {

  const validationSchema = yup.object({
    nis: yup.string().length(16, t('dashboard_user:validation.nisLength'))
      .matches(/^[0-9]+$/, t('dashboard_user:validation.nisFormat'))
      .required(t('dashboard_user:validation.nisRequired')),
    fullName: yup.string().required(t('dashboard_user:validation.fullNameRequired')),
    class: yup.string().required(t('dashboard_user:validation.classRequired')),
    address: yup.string().required(t('dashboard_user:validation.addressRequired')),
    pin: yup.string().length(6, t('dashboard_user:validation.pinLength'))
      .matches(/^[0-9]+$/, t('dashboard_user:validation.pinFormat'))
      .required(t('dashboard_user:validation.pinRequired')),
  });

  const [showAlert, setShowAlert] = useState(false);
  const [showQRReader, setShowQRReader] = useState(false);

  const { data: dataUser } = useQuery('getDetailUser', () => id !== 'add' && fetchApiClient(`/user/${id}`, 'GET'));

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
      pin: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      if (id) {
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
      formik.setFieldValue('pin', pin)
      formik.setFieldValue('class', user.class)
    }
  }, [dataUser?.data])

  useEffect(() => {
    if (IS_OK(data) || IS_OK(dataUpdate)) {
      history.replace('/dashboard/santri');
    }

    if (error || errorUpdate) {
      setShowAlert(true);
    }
  }, [data, dataUpdate, error, errorUpdate]);

  return {
    error,
    isLoading: isLoading || isLoadingUpdate,
    formik,
    showAlert,
    showQRReader,
    setShowQRReader,
    handleScan,
    handleScanError
  };
};

export default useGetAllUserHook;