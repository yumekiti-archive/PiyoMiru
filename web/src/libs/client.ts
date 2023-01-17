import axios from 'axios';

export const fetch = axios.create({
  baseURL: `http://${window.location.hostname}`,
});

export const fetchWithOauth = (jwt: any) =>
  axios.create({
    baseURL: `http://${window.location.hostname}`,
    headers: {
      Authorization: `Bearer ${jwt}`,
    },
  });
