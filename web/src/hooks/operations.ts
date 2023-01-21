import { fetch } from '../libs/client';

// find
export const useOperationsFind = (bus: string | undefined | null) => {
  return fetch.get(`/api/operations?populate=*&sort[0]=id:desc&filters[bus][id][$eq]=${bus}`);
};

// findOne
export const useOperationsFindOne = (id: string | undefined) => {
  return fetch.get(`/api/operations/${id}?populate=*`);
};

// update
export const useOperationsUpdate = (id: string | undefined, body: any) => {
  return fetch.put(`/api/operations/${id}`, body);
};

// create
export const useOperationsCreate = (body: any) => {
  return fetch.post('/api/operations', body);
};
