import axios from 'axios';
import { getHost } from './host';

export const fetch = axios.create({
  baseURL: getHost(),
});

export const fetchWithOauth = (jwt: any) => {
  return axios.create({
    baseURL: getHost(),
    headers: {
      Authorization: `Bearer ${jwt}`,
    },
  });
};
