import GlobalDate from "@components/GlobalDate/GlobalDate";
import { SearchBar } from "@components/SearchBar/SearchBar";
import { Box } from "@mui/material";
import { darkThemeSelectedState } from "@src/store/DarkThemeSelectedState";
import React from "react";
import { useRecoilState } from "recoil";
import DarkModeToggle from "react-dark-mode-toggle";

type NavbarProps = {};

const Navbar: React.FC<NavbarProps> = () => {
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
      <SearchBar />
      <DarkModeToggle
        onChange={setDarkThemeSelected}
        checked={darkThemeSelected}
        size={80}
      />
    </Box>
  );
};

export default Navbar;
