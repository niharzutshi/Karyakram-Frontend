import { atom } from 'recoil';

export const userAuthState = atom({
  key: 'userAuthState',
  default: localStorage.getItem('user-auth') ? true : false
});
