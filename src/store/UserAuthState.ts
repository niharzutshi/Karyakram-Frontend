import { atom } from "recoil";

export const userAuthState = atom({
  key: "userAuthState",
  default: true, // this is for dev, since we want the sidebar to be active all the time
  // default: localStorage.getItem('user-auth') ? true : false
});
