import client from './client';

// me
export const me = () => {
  return client.get('api/users/me', {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('jwt')}`,
    },
  });
}