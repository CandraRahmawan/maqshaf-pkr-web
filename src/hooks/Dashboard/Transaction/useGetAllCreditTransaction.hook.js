import { fetchApiClient } from 'helpers/fetchApi.helper';
import { useQuery } from 'react-query';
import useTableHook from '../useTable.hook';

const useGetAllCreditTransactionHook = () => {
  const { data, isLoading, refetch: refetchAll } = useQuery('getCreditTransactions', () =>
    fetchApiClient(`/deposit/all`, 'GET', {
      limit: pageSummary.limit,
      page: pageSummary.page
    })
  );

  const { data: dataSearch, isLoading: isLoadingSearch, refetch: refetchSearch } = useQuery('getCreditTransactionsSearch', () =>
    fetchApiClient(`/deposit/search`, 'GET', {
      transactionCode: searchValue.trxCode,
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
    isLoading: isLoading || isLoadingSearch,
    pageSummary,
    handleSearch,
    handleChange,
    getPaginationTotal,
    handleChangePage
  };

};

export default useGetAllCreditTransactionHook;
