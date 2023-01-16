import { fetch } from '../libs/client';

// find with filter group id
export const usePassengersFindWithFilterGroupId = (id: string | undefined) => {
  return fetch.get(`/api/users?filters[group][id][$eq]=${id}`);
};
