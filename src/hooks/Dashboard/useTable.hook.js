import { useState, useEffect } from 'react';
import { isEmpty, omit } from 'lodash';

const defaultPageSummary = {
  page: 1,
  limit: 10,
  total: 0
}

const useTableHook = (response, responseSearch, isShowAll) => {
  const [searchValue, setSearchValue] = useState({})
  const [pageSummary, setPageSummary] = useState(defaultPageSummary)
  const [isEnterPressed, setIsEnterPressed] = useState(false)
  const [data, setData] = useState([])
  const [dataSearch, setDataSearch] = useState([])
  const [responseData, setResponseData] = useState([])

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
      setDataSearch(data)
      setPageSummary(defaultPageSummary)
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
    setIsEnterPressed(false)
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
      if (isEmpty(searchValue)) {
        response.refetch()
      } else {
        responseSearch.refetch()
      }
    }, 0)
  }

  useEffect(() => {
    if (isEnterPressed && !isEmpty(searchValue)) {
      setResponseData(dataSearch)
    } else if (isEnterPressed && isEmpty(searchValue)) {
      setResponseData(data)
    } else if (isShowAll) {
      setResponseData(data)
    }
  }, [dataSearch, data, searchValue, isShowAll])

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
    responseData,
    handleSearch,
    handleChange,
    getPaginationTotal,
    handleChangePage,
    setSearchValue
  }

}

export default useTableHook;
