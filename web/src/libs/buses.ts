import { fetcher } from './client';
import useSWR from 'swr';
import client from './client';

// findOne
export const useBusesFindOne = (id: string | undefined) => {
  return useSWR(`/api/buses/${id}`, fetcher);
};

// update
export const useBusesUpdate = (id: string | undefined, body: any) => {
  return client.put(`/api/buses/${id}`, body);
};
