import { fetch } from '../libs/client';

// findOne
export const useBusesFindOne = (id: string | undefined) => {
  return fetch.get(`/api/buses/${id}`);
};

// update
export const useBusesUpdate = (id: string | undefined, body: any) => {
  return fetch.put(`/api/buses/${id}`, body);
};

// create
export const useBusesCreate = (body: any) => {
  return fetch.post(`/api/buses`, body);
};
