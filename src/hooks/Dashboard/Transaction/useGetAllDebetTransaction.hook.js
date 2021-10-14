import { fetchApiClient } from 'helpers/fetchApi.helper';
import { useQuery } from 'react-query';
import { useRef, useState } from 'react'
import useTableHook from '../useTable.hook';

const useGetAllDebetTransactionHook = () => {
  const descriptionElementRef = useRef(null);
  const [open, setOpen] = useState(false);
  const [selectedData, setSelectedData] = useState({})

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

  const handleOpen = (selected) => {
    setSelectedData(selected)
    setOpen(true)
  }

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
    handleChangePage,
    handleOpen,
    selectedData,
    setOpen,
    descriptionElementRef,
    open
  };
};

export default useGetAllDebetTransactionHook;
