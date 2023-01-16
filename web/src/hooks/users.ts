import { fetchWithOauth, fetch } from '../libs/client';

export const useMe = () => {
  return fetchWithOauth(localStorage.getItem('jwt')).get(
    '/api/users/me?populate[family][populate]&populate[group][populate][buses][populate]',
  );
};

export const useUsersFindWithFilterGroupId = (id: string | undefined) => {
  return fetch.get(`/api/users?filters[group][id][$eq]=${id}`);
};

// find one user
export const useUsersFindOne = (id: string | undefined) => {
  return fetch.get(`/api/users/${id}?populate[family][populate]&populate[group][populate][buses][populate]`);
};
