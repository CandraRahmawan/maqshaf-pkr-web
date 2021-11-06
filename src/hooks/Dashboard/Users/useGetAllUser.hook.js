import { useEffect, useState } from 'react';
import { useQuery, useMutation } from 'react-query';
import { IS_OK } from 'constants/httpStatus.constant';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { fetchApiClient } from 'helpers/fetchApi.helper';
import useTableHook from '../useTable.hook';

const useGetAllUserHook = (history, t) => {
  const validationSchema = yup.object({
    balance: yup
      .string()
      .matches(/^[0-9,]+$/, t('dashboard_user:validation.balanceFormat'))
      .required(t('dashboard_user:validation.balanceRequired')),
  });

  const [alert, setAlert] = useState({
    isShow: false,
    type: 'success',
    message: 'common:alert.success',
  });
  const [showPopup, setShowPopup] = useState(false);
  const [showPopupSaldo, setShowPopupSaldo] = useState(false);
  const [selectedData, setSelectedData] = useState({});

  const {
    data,
    isLoading,
    refetch: refetchAll,
  } = useQuery(
    'listAllUser',
    () =>
      fetchApiClient(`/user/all`, 'GET', {
        nis: searchValue.nis,
        name: searchValue.name,
        limit: pageSummary.limit,
        page: pageSummary.page,
      }),
    {
      refetchOnMount: true,
      refetchOnWindowFocus: true,
    }
  );

  const {
    data: dataUpdate,
    error: errorUpdate,
    mutate: mutateUpdate,
  } = useMutation('userMutationUpdate', (requestData) =>
    fetchApiClient(`/user/reset-pin/${requestData}`, 'PUT', {})
  );

  const {
    data: dataDelete,
    error: errorDelete,
    mutate: mutateDelete,
  } = useMutation('userMutationDelete', (requestData) =>
    fetchApiClient(`/user/delete/${requestData}`, 'DELETE', {})
  );

  const {
    data: dataTopup,
    error: errorTopup,
    mutate: mutateTopup,
  } = useMutation('userMutationTopup', (requestData) =>
    fetchApiClient(`/deposit/kredit/${selectedData.userId}`, 'POST', requestData)
  );

  const {
    data: dataWithdrawal,
    error: errorWithdrawal,
    mutate: mutateWithdrawal,
  } = useMutation('userMutationWithdrawal', (requestData) =>
    fetchApiClient(`/withDrawl/${selectedData.userId}`, 'POST', requestData)
  );

  useEffect(() => {
    if (history.location.state?.success) {
      history.replace('/dashboard/santri');
      setAlert({
        isShow: true,
        type: 'success',
        message: 'common:alert.success',
      });
    }
  }, [history.location.state]);

  useEffect(() => {
    if (alert.isShow) {
      setTimeout(() => {
        setAlert({ ...alert, isShow: false });
      }, 5000);
    }
  }, [alert]);

  const {
    searchValue,
    pageSummary,
    handleSearch,
    handleChange,
    handleChangePage,
    getPaginationTotal,
  } = useTableHook(data, refetchAll);

  const getResponseMessage = (data, error, isRefetch = false) => {
    if (IS_OK(data)) {
      setAlert({
        isShow: true,
        type: 'success',
        message: 'common:alert.success',
      });
      window.scrollTo(0, 0);
      if (isRefetch) {
        refetchAll();
      }
    }

    if (error) {
      setAlert({
        isShow: true,
        type: 'error',
        message: error?.message || 'common:alert.failed',
      });
      window.scrollTo(0, 0);
    }
  };

  useEffect(() => getResponseMessage(dataUpdate, errorUpdate), [dataUpdate, errorUpdate]);
  useEffect(() => getResponseMessage(dataDelete, errorDelete, true), [dataDelete, errorDelete]);
  useEffect(() => getResponseMessage(dataTopup, errorTopup, true), [dataTopup, errorTopup]);
  useEffect(
    () => getResponseMessage(dataWithdrawal, errorWithdrawal, true),
    [dataWithdrawal, errorWithdrawal]
  );

  const handleConfirm = (isDelete) => {
    if (isDelete) {
      mutateDelete(selectedData.userId);
      setShowPopup(false);
    } else {
      mutateUpdate(selectedData.userId);
      setShowPopup(false);
    }
  };

  const formik = useFormik({
    initialValues: {
      balance: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      const { balance } = values;
      const val = Math.round(balance.replaceAll(/,/g, ''));
      if (selectedData.userId) {
        if (selectedData.isWithdrawal) {
          mutateWithdrawal({ saldo: val });
        } else {
          mutateTopup({ saldo: val });
        }
        setShowPopupSaldo(false);
        formik.resetForm({ balance: '' });
      }
    },
  });

  const handleCloseSaldo = () => {
    formik.resetForm({ balance: '' });
    setShowPopupSaldo(false);
  };

  const formatMoney = (val) => {
    let newValue = formik.values.balance.toString();
    newValue = newValue.replace(/,/g, '');
    newValue = newValue.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    return newValue;
  };

  return {
    data,
    alert,
    isLoading,
    showPopup,
    handleConfirm,
    selectedData,
    setSelectedData,
    pageSummary,
    setShowPopup,
    handleSearch,
    handleChange,
    handleChangePage,
    getPaginationTotal,
    showPopupSaldo,
    setShowPopupSaldo,
    handleCloseSaldo,
    formik,
    formatMoney,
  };
};

export default useGetAllUserHook;
