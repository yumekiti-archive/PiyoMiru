import { fetch } from '../libs/client';

export const usePassengersFind = (operationId: string | undefined) => {
  return fetch.get(`api/passengers?populate=*&filters[operation][id][$eq]=${operationId}`);
};

// create
export const usePassengersCreate = (body: any) => {
  return fetch.post('/api/passengers', body);
};

// find my id
export const usePassengersFindMyId = (id: string | undefined, operation: string | undefined) => {
  return fetch.get(`api/passengers?populate=*&sort[0]=id:desc&filters[users_permissions_user][id][$eq]=${id}&filters[operation][id][$eq]=${operation}`);
};

// update
export const usePassengersUpdate = (id: string | undefined, body: any) => {
  return fetch.put(`/api/passengers/${id}`, body);
};
