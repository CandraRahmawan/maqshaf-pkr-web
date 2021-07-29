import { useQuery } from "react-query";
import { fetchApiClient } from "helpers/fetchApi.helper";

const useGetUserByQrCodeHook = (code) => {
  const { data: user, isLoading } = useQuery(["getUserByQrCode", code], () =>
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
  return { user, isLoading };
};

export default useGetUserByQrCodeHook;
