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
  const [isEnterPressed, setIsEnterPressed] = useState(false)
  const [data, setData] = useState([])
  const [dataSearch, setDataSearch] = useState([])

  useEffect(() => {
    if (response?.data?.data && isEmpty(searchValue)) {
      setPageSummary({
        ...pageSummary,
        total: response?.data.pageSummary.total,
        page: response?.data.pageSummary.current_page,
      })
      setData(response?.data)
    }

    if (responseSearch?.data?.data && !isEmpty(searchValue)) {
      setPageSummary({
        ...pageSummary,
        total: Number(responseSearch?.data?.pageSummary.total),
        page: Number(responseSearch?.data?.pageSummary.current_page),
      })
      setDataSearch(responseSearch?.data)
    }

  }, [response?.data, responseSearch?.data])


  const handleSearch = (ev) => {
    if (ev.key === 'Enter') {
      setPageSummary(defaultPageSummary)
      setDataSearch([])
      setTimeout(() => {
        if (isEmpty(searchValue)) {
          response.refetch()
        } else {
          responseSearch.refetch()
        }
      }, 0)
      setIsEnterPressed(true)
      ev.preventDefault();
    } else {
      setIsEnterPressed(false)
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
    if (!isEnterPressed || isEmpty(searchValue)) {
      return data;
    } else {
      return dataSearch
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
