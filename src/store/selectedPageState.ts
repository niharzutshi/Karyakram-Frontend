import { atom } from "recoil";

type selectedPage = {
  selectedPage: "home" | "notifications" | "trending" | "calendar";
};

const defaultSelectedPage: selectedPage = {
  selectedPage: "home",
};

export const selectedPageState = atom<selectedPage>({
  key: "selectedPageState",
  default: defaultSelectedPage,
});
