import { fetchApiClient } from 'helpers/fetchApi.helper';
import { useQuery } from 'react-query';
import useTableHook from '../useTable.hook';

const useGetAllDebetTransactionHook = () => {

  const { data, isLoading, refetch: refetchAll } = useQuery('getDebetTransactions', () =>
    fetchApiClient(`/debet/all`, 'GET', {
      limit: pageSummary.limit,
      page: pageSummary.page
    })
  );

  const { data: dataSearch, isLoading: isLoadingSearch, refetch: refetchSearch } = useQuery('getDebetTransactionsSearch', () =>
    fetchApiClient(`/debet/search`, 'GET', {
      transactionCode: searchValue.trxCode,
      nis: searchValue.nis,
      limit: pageSummary.limit,
      page: pageSummary.page
    }),
    { enabled: false }
  );

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

  return {
    data: responseData,
    isLoading,
    pageSummary,
    handleSearch,
    handleChange,
    getPaginationTotal,
    handleChangePage
  };
};

export default useGetAllDebetTransactionHook;
