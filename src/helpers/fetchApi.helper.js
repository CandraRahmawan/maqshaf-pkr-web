import format from "string-template";
import qs from "qs";

const API_URL =
  process.env.NODE_ENV === "development" ? "" : process.env.REACT_APP_API;

const isMethodGET = (method) => method === "GET";

const bindUrlWithParam = (url, method, data) =>
  format(url, data) + (isMethodGET(method) ? `?${qs.stringify(data)}` : "");

export const fetchApiClient = (url, method, data) =>
  fetch(bindUrlWithParam(API_URL + url, method, data), {
    method,
    body: !isMethodGET(method) ? JSON.stringify(data) : undefined,
  })
    .then((response) => response.json())
    .then((respData) => {
      if (respData?.code !== 200) {
        const { code, message, data } = respData;
        const error = new Error(message);
        error.code = code;
        error.message = message;
        error.data = data;
        throw error;
      }
      return respData;
    });
