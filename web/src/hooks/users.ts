import { useQuery } from 'react-query';
import { fetch, fetchWithOauth } from '../libs/client';

export const useMe = () => {
  return useQuery('me', () =>
    fetchWithOauth(localStorage.getItem('jwt'))
      .get('/api/users/me?populate[family][populate]&populate[group][populate][buses][populate]')
      .then((res) => res.data),
  );
};
