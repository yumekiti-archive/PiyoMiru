import { fetch } from '../libs/client';

// find
export const useOperationsFind = (busId: string) => {
  return fetch.get(`/api/operations?populate=*&filters[bus][id][$eq]=${busId}`);
};

// update
export const useOperationsUpdate = (id: string | undefined, body: any) => {
  return fetch.put(`/api/operations/${id}`, body);
};

// create
export const useOperationsCreate = (body: any) => {
  return fetch.post('/api/operations', body);
};
