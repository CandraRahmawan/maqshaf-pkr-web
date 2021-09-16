import { useEffect, useState } from 'react';
import { useQuery, useMutation } from 'react-query';
import { IS_OK } from 'constants/httpStatus.constant';
import { fetchApiClient } from 'helpers/fetchApi.helper';

const useGetAllUserHook = () => {
  const [showAlert, setShowAlert] = useState(false)
  const [showPopup, setShowPopup] = useState(false)
  const [selectedData, setSelectedData] = useState({})
  const { data, isLoading } = useQuery('listAllUser', () => fetchApiClient(`/user/all`, 'GET'));

  const { data: dataUpdate, error: errorUpdate, mutate: mutateUpdate } = useMutation('userMutationUpdate', (requestData) =>
    fetchApiClient(`/user/reset-pin/${requestData}`, 'PUT', {})
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
    data,
    showAlert,
    message: errorUpdate?.message || dataUpdate?.message,
    isLoading,
    error: errorUpdate,
    showPopup,
    handleReset,
    selectedData,
    setSelectedData,
    setShowPopup
  };
};

export default useGetAllUserHook;
