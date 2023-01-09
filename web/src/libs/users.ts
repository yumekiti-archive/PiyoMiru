import { fetcher } from './client';
import useSWR from 'swr';

// me
export const useMe = () => {
  return useSWR('/api/users/me', fetcher);
};
