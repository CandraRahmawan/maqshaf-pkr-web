import { useEffect, useState } from 'react';
import { fetchApiClient } from 'helpers/fetchApi.helper';
import { useMutation, useQuery } from 'react-query';
import { IS_OK } from 'constants/httpStatus.constant';
import useTableHook from '../useTable.hook';

const useGetAllAdministratorHook = (history) => {
  const [alert, setAlert] = useState({
    isShow: false,
    type: 'success',
    message: 'common:alert.success'
  })
  const { data, isLoading, refetch } = useQuery('listAllAdministrator', () =>
    fetchApiClient(`/administrator/all`, 'GET', {
      limit: pageSummary.limit,
      page: pageSummary.page
    }),
    {
      refetchOnMount: "always"
    }
  );

  const { data: dataDelete,  mutate, error } = useMutation('administratorMutationUpdate', (id) =>
    fetchApiClient(`/administrator/delete/${id}`, 'DELETE', {})
  )

  useEffect(() => {
    if (history.location.state?.success) {
      history.replace('/dashboard/administrator');
      setAlert({
        isShow: true,
        type: 'success',
        message: 'common:alert.success'
      })
    }
  }, [history.location.state])

  useEffect(() => {
    if (alert.isShow) {
      setTimeout(() => {
        setAlert({ ...alert, isShow: false })
      }, 3000)
    }
  }, [alert])

  const {
    pageSummary,
    handleChangePage,
    getPaginationTotal
  } = useTableHook(data, refetch)

  const handleDelete = (id) => {
    mutate(id)
  }

  useEffect(() => {
    if (IS_OK(dataDelete)) {
      refetch()
      setAlert({
        isShow: true,
        type: 'success',
        message: 'common:alert.success'
      })
    }

    if (error) {
      setAlert({
        isShow: true,
        type: 'error',
        message: 'common:alert.failed'
      })
    }
  }, [dataDelete, error]);

  return { alert, data, isLoading, refetch, handleDelete, pageSummary, getPaginationTotal, handleChangePage };
};

export default useGetAllAdministratorHook;
