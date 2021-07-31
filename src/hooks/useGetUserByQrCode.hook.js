import { useQuery } from "react-query";
import { fetchApiClient } from "helpers/fetchApi.helper";
import { useEffect } from "react";

const useGetUserByQrCodeHook = (code, setShowAlert) => {
  const {
    data: user,
    error: errorUser,
    isLoading,
  } = useQuery(["getUserByQrCode", code], () =>
    fetchApiClient(
      `/user/saldo`,
      "GET",
      {
        nis: code,
      },
      {
        enabled: !!code,
      }
    )
  );

  useEffect(() => {
    if (errorUser) {
      setShowAlert(true);
    }
  }, [errorUser]);

  return { user, errorUser, isLoading };
};

export default useGetUserByQrCodeHook;
