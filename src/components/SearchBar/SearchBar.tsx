import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import { useRecoilValue } from "recoil";

import { darkThemeSelectedState } from "../../store/darkThemeSelectedState";

import "./SearchBar.module.scss";

export const SearchBar = () => {
  const darkThemeActive = useRecoilValue(darkThemeSelectedState);
  return (
    <div
      className={
        darkThemeActive ? "search-bar__container-dark" : "search-bar__container"
      }
    >
      <input
        type="text"
        placeholder="Search"
        className={
          !darkThemeActive ? "search-bar__element-dark" : "search-bar__element"
        }
      />
      <SearchIcon fontSize="large" className="search-bar__icon" />
    </div>
  );
};
