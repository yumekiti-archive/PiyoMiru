import { fetch } from '../libs/client';
import { useQuery } from 'react-query';

// find with filter group id
export const usePassengersFindWithFilterGroupId = (id: string | undefined) => {
  return useQuery('passengers', () => fetch.get(`/api/users?filters[group][id][$eq]=${id}`).then((res) => res.data));
};
