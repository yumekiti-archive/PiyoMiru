import axios from 'axios';

const client = axios.create({
  baseURL: 'http://localhost:1337/',
});

export default client;

export const fetcher = (url: string) =>
  client.get(url, { headers: { Authorization: `Bearer ${localStorage.getItem('jwt')}` } }).then((res) => res.data);
