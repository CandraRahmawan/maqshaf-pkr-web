import format from 'string-template';
import qs from 'qs';
import { IS_OK, IS_UNAUTHORIZED } from 'constants/httpStatus.constant';
import { getUser } from 'helpers/auth.helper';

const API_URL = process.env.NODE_ENV === 'development' ? '' : process.env.REACT_APP_API;

const isMethodGET = (method) => method === 'GET';

const bindUrlWithParam = (url, method, data) =>
  format(url, data) + (isMethodGET(method) ? `?${qs.stringify(data)}` : '');

export const fetchApiClient = (url, method, data) =>
  fetch(bindUrlWithParam(API_URL + url, method, data), {
    method,
    headers: {
      api_token: getUser()?.token,
      'Content-Type': 'application/json',
    },
    body: !isMethodGET(method) ? JSON.stringify(data) : undefined,
  })
    .then((response) => response.json())
    .then((respData) => {
      if (IS_UNAUTHORIZED(respData)) {
        window.location.replace('/dashboard/login');
      }

      if (!IS_OK(respData)) {
        const { code, message, data } = respData;
        const error = new Error(message);
        error.code = code;
        error.message = message;
        error.data = data;
        throw error;
      }
      return respData;
    });
