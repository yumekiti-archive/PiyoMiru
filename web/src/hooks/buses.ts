import { useQuery } from 'react-query';
import { fetch, fetchWithOauth } from '../libs/client';

// findOne
export const useBusesFindOne = (id: string | undefined) => {
  return useQuery('buses', () => fetch.get('/api/buses/${id}').then((res) => res.data));
};

// update
export const useBusesUpdate = (id: string | undefined, body: any) => {
  return useQuery('buses', () => fetch.put(`/api/buses/${id}`, body).then((res) => res.data));
};

// create
export const useBusesCreate = (body: any) => {
  return fetch.post('/api/buses', body);
};
