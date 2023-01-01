import client from './client';

// 登録
export const register = (data: { username: string; email: string; password: string }) => {
  return client.post('api/auth/local/register', data);
};

// ログイン
export const login = (data: { identifier: string; password: string }) => {
  return client.post('api/auth/local', data);
};
