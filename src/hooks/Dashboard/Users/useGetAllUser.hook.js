import { useEffect, useState } from 'react';
import { useQuery, useMutation } from 'react-query';
import { IS_OK } from 'constants/httpStatus.constant';
import { fetchApiClient } from 'helpers/fetchApi.helper';
import useTableHook from '../useTable.hook';

const useGetAllUserHook = () => {
  const [showAlert, setShowAlert] = useState(false)
  const [showPopup, setShowPopup] = useState(false)
  const [selectedData, setSelectedData] = useState({})

  const { data, isLoading, refetch: refetchAll } = useQuery('listAllUser', () =>
    fetchApiClient(`/user/all`, 'GET', {
      limit: pageSummary.limit,
      page: pageSummary.page
    })
  );

  const { data: dataSearch, isLoading: isLoadingSearch, refetch: refetchSearch } = useQuery('listAllUserSearch', () =>
    fetchApiClient(`/user/search`, 'GET', {
      class: searchValue.class,
      name: searchValue.name,
      limit: pageSummary.limit,
      page: pageSummary.page
    }),
    { enabled: false }
  );

  const { data: dataUpdate, error: errorUpdate, mutate: mutateUpdate } = useMutation('userMutationUpdate', (requestData) =>
    fetchApiClient(`/user/reset-pin/${requestData}`, 'PUT', {})
  )

  const {
    responseData,
    searchValue,
    pageSummary,
    handleSearch,
    handleChange,
    handleChangePage,
    getPaginationTotal
  } = useTableHook(
    { data, refetch: refetchAll },
    { data: dataSearch, refetch: refetchSearch }
  )

  useEffect(() => {
    if (IS_OK(dataUpdate)) {
      setShowAlert(true);
    }

    if (errorUpdate) {
      setShowAlert(true);
    }

    setTimeout(() => {
      setShowAlert(false)
    }, 4000)
  }, [dataUpdate, errorUpdate]);

  const handleReset = () => {
    mutateUpdate(selectedData.userId)
    setShowPopup(false)
  }

  return {
    data: responseData,
    showAlert,
    message: errorUpdate?.message || dataUpdate?.message,
    isLoading,
    error: errorUpdate,
    showPopup,
    handleReset,
    selectedData,
    setSelectedData,
    pageSummary,
    setShowPopup,
    handleSearch,
    handleChange,
    handleChangePage,
    getPaginationTotal
  };
};

export default useGetAllUserHook;
