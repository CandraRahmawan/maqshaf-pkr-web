import { useEffect } from 'react';
import { useMutation } from 'react-query';
import { useDispatch } from 'react-redux';
import { fetchApiClient } from 'helpers/fetchApi.helper';
import { setTransaction } from 'redux/reducers/transaction.reducer';
import messageAlert from 'helpers/messageAlert.helper';

const useTransactionDebitHook = (history, setShowAlert, t) => {
  const dispatch = useDispatch();
  const {
    data: dataMutationBuy,
    error: errorMutationBuy,
    isLoading: isLoadingMutationBuy,
    mutate: mutateBuy,
  } = useMutation((data) => fetchApiClient('/transactions/buy/{userId}', 'POST', data));

  const {
    data: dataMutationDebit,
    error: errorMutationDebit,
    isLoading: isLoadingMutationDebit,
    mutate: mutateDebit,
  } = useMutation((data) => fetchApiClient('/deposit/debet/{userId}', 'POST', data));

  useEffect(() => {
    if (dataMutationBuy?.data) {
      const getResult = dataMutationBuy?.data[0];
      dispatch(setTransaction(getResult));
      history.push('/pin');
    }

    if (errorMutationBuy) {
      setShowAlert(true);
    }
  }, [dataMutationBuy, errorMutationBuy]);

  useEffect(() => {
    if (dataMutationDebit) {
      void messageAlert.success({
        title: t('search_product:alert.successPay'),
        text: dataMutationDebit?.message,
        href: '/',
      });
    }

    if (errorMutationDebit) {
      setShowAlert(true);
    }
  }, [dataMutationDebit, errorMutationDebit]);

  return {
    errorMutationBuy,
    isLoadingMutationBuy,
    mutateBuy,
    mutateDebit,
    dataMutationDebit,
    errorMutationDebit,
    isLoadingMutationDebit,
  };
};

export default useTransactionDebitHook;
