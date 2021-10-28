import { useEffect, useState } from 'react';
import { fetchApiClient } from 'helpers/fetchApi.helper';
import { useMutation, useQuery } from 'react-query';
import * as yup from 'yup';
import { useFormik } from 'formik';
import { IS_OK } from 'constants/httpStatus.constant';
import useTableHook from '../useTable.hook';

const useGetAllAdministratorHook = (history, t) => {
  const [showPopup, setShowPopup] = useState(false)
  const [showPopupDelete, setShowPopupDelete] = useState(false)
  const [selectedData, setSelectedData] = useState({})
  const [togglePassword, setTogglePassword] = useState({
    password: false,
    repassword: false,
    oldPassword: false,
  })
  const [alert, setAlert] = useState({
    isShow: false,
    type: 'success',
    message: 'common:alert.success',
  });

  const { data, isLoading, refetch } = useQuery(
    'listAllAdministrator',
    () =>
      fetchApiClient(`/administrator/all`, 'GET', {
        limit: pageSummary.limit,
        page: pageSummary.page,
      }),
    {
      refetchOnMount: true,
      refetchOnWindowFocus: true,
    }
  );

  const {
    data: dataDelete,
    mutate,
    error,
  } = useMutation('administratorMutationUpdate', (id) =>
    fetchApiClient(`/administrator/delete/${id}`, 'DELETE', {})
  );

    const {
      data: dataUpdate,
      mutate: mutateUpdate,
      error: errorUpdate,
    } = useMutation((data) => fetchApiClient(`/administrator/update-password/${selectedData.administratorId}`, 'PUT', data));
  

  const validationSchema = yup.object({
    oldPassword: yup.string().required(t('dashboard_administrator:validation.oldPasswordRequired')),
    password: yup.string().required(t('dashboard_administrator:validation.passwordRequired')),
    repassword: yup.string()
      .oneOf([yup.ref('password'), null], t('dashboard_administrator:validation.matchPasswordConfirm'))
  });

  const formik = useFormik({
    initialValues: {
      password: '',
      repassword: '',
      oldPassword: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      if (selectedData.administratorId) {
        const req = {
            username: selectedData.username,
            password: values.password,
            passwordOld: values.oldPassword,
        }
        mutateUpdate(req);
        handleClosePopup()
      }
    },
  });

  const handleClosePopup = () => {
    setShowPopup(false)
    formik.resetForm({
      password: '',
      repassword: '',
      oldPassword: '',
    })
  }

  useEffect(() => {
    if (history.location.state?.success) {
      history.replace('/dashboard/administrator');
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

  const { pageSummary, handleChangePage, getPaginationTotal } = useTableHook(data, refetch);

  const handleDelete = () => {
    mutate(selectedData.administratorId);
    setShowPopupDelete(false);
  };

  useEffect(() => {
    if (IS_OK(dataDelete) || IS_OK(dataUpdate)) {
      refetch();
      setAlert({
        isShow: true,
        type: 'success',
        message: 'common:alert.success',
      });
      window.scrollTo(0, 0);
    }

    if (error || errorUpdate) {
      setAlert({
        isShow: true,
        type: 'error',
        message: error?.message || 'common:alert.failed',
      });
      window.scrollTo(0, 0);
    }
  }, [dataDelete, error, dataUpdate, errorUpdate]);

  const handleChangePassword = (row) => {
    setSelectedData(row)
  }

  const handleTogglePassword = (name) => {
    setTogglePassword({
      ...togglePassword,
      [name]: !togglePassword[name]
    })
  }

  const handleOpenDelete = (row) => {
    setSelectedData(row)
  }

  return {
    alert,
    data,
    selectedData,
    isLoading,
    refetch,
    handleDelete,
    pageSummary,
    getPaginationTotal,
    handleChangePage,
    handleChangePassword,
    showPopup,
    setShowPopup,
    handleClosePopup,
    togglePassword,
    handleTogglePassword,
    formik,
    showPopupDelete,
    setShowPopupDelete,
    handleOpenDelete
  };
};

export default useGetAllAdministratorHook;
