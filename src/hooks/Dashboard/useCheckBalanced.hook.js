import { fetchApiClient } from 'helpers/fetchApi.helper';
import { useState } from 'react';
import { useQuery } from 'react-query';

const useCheckBalancedHook = () => {
  const [showQRReader, setShowQRReader] = useState(false);
  const [showAlertBalance, setShowAlertBalance] = useState(false);
  const [nis, setNis] = useState('')

  const { data, refetch } = useQuery(['getDetailUser', nis], () => fetchApiClient(`/user/saldo`, 'GET', {
    nis
  }),
    {
      enabled: false,
    }
  );


  const handleScan = (data) => {
    if (data) {
      setNis(data)
      setTimeout(() => {
        refetch()
        setShowQRReader(false)
        setShowAlertBalance(true)
      }, 0)
    }
  }

  const handleScanError = () => {
    setShowQRReader(false)
  };



  return {
    data,
    showQRReader,
    setShowQRReader,
    handleScan,
    handleScanError,
    showAlertBalance,
    setShowAlertBalance
  };
};

export default useCheckBalancedHook;
