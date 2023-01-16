import axios from 'axios';

export const fetch = axios.create({
  baseURL: `http://${window.location.hostname}:1337`,
});

export const fetchWithOauth = (jwt: any) =>
  axios.create({
    baseURL: `http://${window.location.hostname}:1337`,
    headers: {
      Authorization: `Bearer ${jwt}`,
    },
  });
