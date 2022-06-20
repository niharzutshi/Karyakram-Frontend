import React from "react";
import { useRecoilState } from "recoil";
import DarkModeToggle from "react-dark-mode-toggle";
import GlobalDate from "../components/GlobalDate/GlobalDate";

import { SearchBar } from "../components/SearchBar/SearchBar";
import { ProfileDropdown } from "../components/ProfileDropdown/ProfileDropdown";
import { darkThemeSelectedState } from "../store/darkThemeSelectedState";
import { Box } from "@mui/material";

const Navbar: React.FC = () => {
  const [darkThemeSelected, setDarkThemeSelected] = useRecoilState(
    darkThemeSelectedState
  );
  return (
    <Box
      display="flex"
      justifyContent="space-between"
      mt={2}
      pr={2}
      alignItems="center"
    >
      <GlobalDate />
      <div style={{ paddingLeft: "200px" }}>
        <SearchBar />
      </div>
      <div style={{ paddingLeft: "200px" }}>
        <ProfileDropdown />
      </div>
      <DarkModeToggle
        onChange={setDarkThemeSelected}
        checked={darkThemeSelected}
        size={80}
      />
    </Box>
  );
};

export default Navbar;
