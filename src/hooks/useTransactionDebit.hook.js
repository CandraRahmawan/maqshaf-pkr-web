import { useMutation } from "react-query";
import { fetchApiClient } from "helpers/fetchApi.helper";
import { useEffect } from "react";

const useTransactionDebitHook = (history, setShowAlert) => {
  const {
    data: dataMutationBuy,
    error: errorMutationBuy,
    isLoading: isLoadingMutationBuy,
    mutate: mutateBuy,
  } = useMutation((data) =>
    fetchApiClient("/transactions/buy/{userId}", "POST", data)
  );

  useEffect(() => {
    if (dataMutationBuy) {
      history.push("/pin");
    }

    if (errorMutationBuy) {
      setShowAlert(true);
    }
  }, [dataMutationBuy, errorMutationBuy]);

  return { dataMutationBuy, errorMutationBuy, isLoadingMutationBuy, mutateBuy };
};

export default useTransactionDebitHook;
