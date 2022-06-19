import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import { useRecoilValue } from "recoil";

import { darkThemeSelectedState } from "../../store/darkThemeSelectedState";

const searchBarContainer = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  margin: "20px",
  backgroundColor: "#281857",
  color: "white",
  borderRadius: "12px",
  border: "none",
};

const searchBarContainerDark = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  maxWidth: '"500px"',
  margin: "20px",
  backgroundColor: "#282828",
  borderRadius: "12px",
};

const searchBarElement = {
  color: "white",
  width: '"500px"',
  border: "none",
  padding: "10px 15px 10px 15px",
  outline: "none",
  backgroundColor: "transparent",
  fontSize: "15px",
  letterSpacing: "1px",
};

const searchBarElementDark = {
  width: '"500px"',
  border: "none",
  padding: "10px 15px 10px 15px",
  outline: "none",
  backgroundColor: "transparent",
  color: "white",
  fontSize: "15px",
  letterSpacing: "1px",
};

export const SearchBar = () => {
  const darkThemeActive = useRecoilValue(darkThemeSelectedState);
  return (
    <div style={darkThemeActive ? searchBarContainerDark : searchBarContainer}>
      <input
        type="text"
        placeholder="Search"
        style={!darkThemeActive ? searchBarElementDark : searchBarElement}
      />
      <SearchIcon
        fontSize="large"
        style={{
          justifyContent: "flex-end",
          padding: "0 10px 0 0",
          cursor: "pointer",
        }}
      />
    </div>
  );
};
