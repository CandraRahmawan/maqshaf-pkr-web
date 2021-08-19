import { StatusCodes } from 'http-status-codes';

export const IS_OK = (response) => response?.code === StatusCodes.OK;

export const IS_UNAUTHORIZED = (response) => response?.code === StatusCodes.UNAUTHORIZED;
