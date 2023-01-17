import axios from 'axios';

export const fetch = axios.create({
  baseURL: `${window.location.origin}`,
});

export const fetchWithOauth = (jwt: any) =>
  axios.create({
    baseURL: `${window.location.origin}`,
    headers: {
      Authorization: `Bearer ${jwt}`,
    },
  });
