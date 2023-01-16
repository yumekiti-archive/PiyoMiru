import { fetchWithOauth } from '../libs/client';

export const useMe = () => {
  return fetchWithOauth(localStorage.getItem('jwt')).get(
    '/api/users/me?populate[family][populate]&populate[group][populate][buses][populate]',
  );
};
