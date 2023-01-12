import { fetcher, fetcherWithOauth } from './client';
import useSWR from 'swr';

// me
export const useMe = () => {
  return useSWR(
    '/api/users/me?populate[family][populate]&populate[group][populate][buses][populate]',
    fetcherWithOauth,
  );
};

// passenger
export const usePassenger = (id: string | undefined) => {
  return useSWR(`/api/users?filters[group][id][$eq]=${id}`, fetcher);
};
