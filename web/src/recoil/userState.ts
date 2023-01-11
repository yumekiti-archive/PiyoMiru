import { atom } from 'recoil';

export const userState = atom<any>({
  key: 'user',
  default: null,
});