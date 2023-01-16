import { fetch } from '../libs/client';

export const usePassengersFind = (operationId: string | undefined) => {
  return fetch.get(`api/passengers?populate=*&filters[operation][id][$eq]=${operationId}`);
};

// create
export const usePassengersCreate = (body: any) => {
  return fetch.post('/api/passengers', body);
};
