import { fetcher } from './client';
import useSWR from 'swr';

// findOne
export const useBusesFindOne = (id: string | undefined) => {
  return useSWR(`/api/buses/${id}`, fetcher);
};
