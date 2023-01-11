import { atom } from 'recoil';

export const userState = atom<any>({
  key: 'user',
  default: null,
});

export const busState = atom<any>({
  key: 'bus',
  default: null,
});
