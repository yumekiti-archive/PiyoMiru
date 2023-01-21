import { fetch } from '../libs/client';

// create
export const useFamiliesCreate = (body: any) => {
  return fetch.post('/api/families', body);
}