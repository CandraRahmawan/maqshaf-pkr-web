import { fetchApiClient } from 'helpers/fetchApi.helper';
import { useEffect, useState } from 'react';
import { IS_OK } from 'constants/httpStatus.constant';
import { useFormik } from 'formik';
import { useQuery } from 'react-query';

const useCheckBalancedHook = (callbackSuccess) => {
  const [showQRReader, setShowQRReader] = useState(false);
  const [showAlertBalance, setShowAlertBalance] = useState(false);
  const [dataBalance, setDataBalance] = useState({});

  const formik = useFormik({
    initialValues: {
      nis: '',
    },
  });

  const { data, error, isLoading, refetch } = useQuery(['getDetailUser'], () => fetchApiClient(`/user/saldo`, 'GET', {
    nis: formik.values.nis
  }),
    {
      enabled: false,
      onSuccess: callbackSuccess
    }
  );

  useEffect(() => {
    if (IS_OK(data)) {
      setDataBalance(data)
      setShowAlertBalance(true)
    }

    if (error) {
      setDataBalance({})
      setShowAlertBalance(false)
      formik.setErrors({ nis: 'Siswa tidak ditemukan' })
    }
  }, [data, error])

  const handleScan = (data) => {
    if (data) {
      formik.setValues({ nis: data })
      setTimeout(() => {
        refetch()
        setShowQRReader(false)
      }, 0)
    }
  }

  const handleBlurNIS = () => {
    if (formik.values.nis) {
      refetch()
    }
  }

  const handleScanError = () => {
    setShowQRReader(false)
  };

  const handleCloseModal = () => {
    setShowAlertBalance(false)
    setDataBalance({})
    formik.setFieldValue('nis', '')
  }

  return {
    data: dataBalance,
    formik,
    handleBlurNIS,
    showQRReader,
    setShowQRReader,
    handleScan,
    handleScanError,
    showAlertBalance,
    setShowAlertBalance,
    handleCloseModal
  };
};

export default useCheckBalancedHook;
