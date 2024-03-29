import { fetchWithOauth, fetch } from '../libs/client';

export const useMe = () => {
  return fetchWithOauth(localStorage.getItem('jwt')).get(
    '/api/users/me?populate[family][populate]&populate[group][populate][buses][populate]',
  );
};

export const useUsersFindWithFilterGroup = (id: string | undefined) => {
  return fetch.get(`/api/users?filters[group][id][$eq]=${id}`);
};

// find one user
export const useUsersFindOne = (id: string | undefined) => {
  return fetch.get(`/api/users/${id}?populate[family][populate]&populate[group][populate][buses][populate]`);
};

// update one user
export const useUsersUpdateOne = (id: string | undefined, body: any) => {
  return fetch.put(`/api/users/${id}`, body);
};

// find by family
export const useUsersFindByFamily = (id: string | undefined) => {
  return fetch.get(`/api/users?filters[family][id][$eq]=${id}`);
};
