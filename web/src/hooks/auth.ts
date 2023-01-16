import { fetch, fetchWithOauth } from '../libs/client';
import { useNavigate } from 'react-router-dom';

// 登録
export const register = (data: { username: string; email: string; password: string }) => {
  return fetch.post('api/auth/local/register', data);
};

// ログイン
export const useLogin = (data: { identifier: string; password: string }) => {
  return fetch.post('api/auth/local', data).then((res) => {
    localStorage.setItem('jwt', res.data.jwt);
  });
};

// ログアウト
export const logout = () => {
  localStorage.removeItem('jwt');
};
