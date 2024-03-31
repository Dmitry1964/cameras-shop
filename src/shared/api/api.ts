import axios, {AxiosInstance} from 'axios';
import { BACKEND_URL, TIME_OUT } from '../constants/constants';

export const createAPI = (): AxiosInstance => {
  const api = axios.create({
    baseURL: BACKEND_URL,
    timeout: TIME_OUT,
  });
  return api;
};

