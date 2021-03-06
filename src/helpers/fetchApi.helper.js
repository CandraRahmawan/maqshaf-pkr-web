import format from 'string-template';
import qs from 'qs';
import { IS_OK, IS_UNAUTHORIZED } from 'constants/httpStatus.constant';
import { getUser, logout } from 'helpers/auth.helper';

const isMethodGET = (method) => method === 'GET';

const bindUrlWithParam = (url, method, data) =>
  format(url, data) + (isMethodGET(method) ? `?${qs.stringify(data)}` : '');

export const fetchApiClient = (url, method, data, isForm) =>
  fetch(bindUrlWithParam(process.env.REACT_APP_API + url, method, data), {
    method,
    headers: {
      api_token: getUser()?.token,
      ...(!isForm && {'Content-Type': 'application/json'}),
    },
    body: !isMethodGET(method) ? (isForm ? data : JSON.stringify(data)) : undefined,
  })
    .then((response) => response.json())
    .then((respData) => {
      if (IS_UNAUTHORIZED(respData)) {
        logout();
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
