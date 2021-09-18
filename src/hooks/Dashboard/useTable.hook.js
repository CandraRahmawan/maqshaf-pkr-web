import { useState, useEffect } from 'react';
import { isEmpty, omit } from 'lodash';

const defaultPageSummary = {
  page: 1,
  limit: 10,
  total: 0
}

const useTableHook = (response, responseSearch) => {
  const [searchValue, setSearchValue] = useState({})
  const [pageSummary, setPageSummary] = useState(defaultPageSummary)

  useEffect(() => {
    if (response?.data?.data && isEmpty(searchValue)) {
      setPageSummary({
        ...pageSummary,
        total: response?.data.pageSummary.total,
        page: response?.data.pageSummary.current_page,
      })
    }

    if (responseSearch?.data?.data && !isEmpty(searchValue)) {
      setPageSummary({
        ...pageSummary,
        total: Number(responseSearch?.data?.pageSummary.total),
        page: Number(responseSearch?.data?.pageSummary.current_page),
      })
    }

  }, [response?.data, responseSearch?.data])


  const handleSearch = (ev) => {
    if (ev.key === 'Enter') {
      setPageSummary(defaultPageSummary)
      setTimeout(() => {
        if (isEmpty(searchValue)) {
          response.refetch()
        } else {
          responseSearch.refetch()
        }
      }, 0)
      ev.preventDefault();
    }
  }

  const handleChange = (e, name) => {
    const val = e.currentTarget.value
    if (val) {
      setSearchValue({
        ...searchValue,
        [name]: val
      })
    } else {
      const newSearch = omit(searchValue, name)
      setSearchValue(newSearch)
    }
  }

  const handleChangePage = (e, val) => {
    setPageSummary({
      ...pageSummary,
      page: val
    })
    setTimeout(() => {
      if (isEmpty(searchValue)) {
        response.refetch()
      } else {
        responseSearch.refetch()
      }
    }, 0)
  }

  const getData = () => {
    if (isEmpty(searchValue)) {
      return response.data;
    } else {
      return responseSearch.data
    }
  }


  const getPaginationTotal = () => {
    if (pageSummary.total < pageSummary.limit) {
      return 1;
    }
    const countPage = pageSummary.total % pageSummary.limit === 0 ? 0 : 1
    const fullPage = pageSummary.total / pageSummary.limit
    return Math.floor(fullPage + countPage)
  }

  return {
    pageSummary,
    searchValue,
    responseData: getData(),
    handleSearch,
    handleChange,
    getPaginationTotal,
    handleChangePage
  }

}

export default useTableHook;
