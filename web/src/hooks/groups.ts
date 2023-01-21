import { fetch } from '../libs/client';

// find by groupname
export const useGroupsFindOne = (groupname: string | undefined) => {
  return fetch.get(`/api/groups?filters[groupname][$eq]=${groupname}`);
};

// create
export const useGroupsCreate = (body: any) => {
  return fetch.post('/api/groups', body);
};
