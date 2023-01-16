import { fetch } from '../libs/client';

// 登録
export const register = (body: { username: string; email: string; password: string }) => {
  return fetch.post('api/auth/local/register', body).then((res) => {
    localStorage.setItem('jwt', res.data.jwt);
  });
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
