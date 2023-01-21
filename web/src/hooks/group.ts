import { fetch } from '../libs/client';

// create
export const useGroupsCreate = (body: any) => {
  return fetch.post('/api/groups', body);
};
