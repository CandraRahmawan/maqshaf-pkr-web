import { useState, useEffect } from 'react';
import { isEmpty, omit } from 'lodash';

const defaultPageSummary = {
  page: 1,
  limit: 10,
  total: 0
}

const useTableHook = (response, refetch) => {
  const [searchValue, setSearchValue] = useState({})
  const [pageSummary, setPageSummary] = useState(defaultPageSummary)

  useEffect(() => {
    if (response?.data && isEmpty(searchValue)) {
      setPageSummary({
        ...pageSummary,
        total: response.pageSummary.total,
        page: response.pageSummary.current_page,
      })
    }

  }, [response?.data])


  const handleSearch = (ev) => {
    if (ev.key === 'Enter') {
      setPageSummary(defaultPageSummary)
      setTimeout(() => {
        refetch()
      }, 0)
      ev.preventDefault();
    }
  }

  const handleChange = (e, name) => {
    // setIsEnterPressed(false)
    const val = e.currentTarget.value || e.target.value
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
      refetch()
    }, 0)
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
    handleSearch,
    handleChange,
    getPaginationTotal,
    handleChangePage,
    setSearchValue
  }

}

export default useTableHook;
