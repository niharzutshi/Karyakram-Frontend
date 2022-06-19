import { atom } from "recoil";

const defaultUserAuthState = true;
// typeof window !== undefined
//   ? localStorage.getItem("user-auth")
//     ? true
//     : false
//   : false;

export const userAuthState = atom({
  key: "userAuthState",
  // default: true, // this is for dev, since we want the sidebar to be active all the time
  default: defaultUserAuthState,
});
