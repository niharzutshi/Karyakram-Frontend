import React from "react";
import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import { RecoilRoot, useRecoilValue } from "recoil";

import { Sidebar } from "../components/Sidebar/Sidebar";

import { darkThemeSelectedState } from "../store/darkThemeSelectedState";
import { userAuthState } from "../store/userAuthState";

import { darkTheme, lightTheme } from "../theme";

import "./App.module.scss";
import LandingPage from "./landingPage";
import Dashboard from "./dashboard";

const App = () => {
  const darkThemeSelected = useRecoilValue(darkThemeSelectedState);
  const userAuthenticated = useRecoilValue(userAuthState);
  return (
    <ThemeProvider theme={darkThemeSelected ? darkTheme : lightTheme}>
      <CssBaseline />
      <div
        style={{
          margin: "0",
          height: "100%",
          overflow: "hidden",
          position: "absolute",
          zIndex: "1",
          display: "flex",
          width: "100%",
        }}
      >
        {!userAuthenticated && (
          <Box display={{ xs: "none", sm: "none", lg: "block", md: "none" }}>
            <Sidebar />
          </Box>
        )}
      </div>
      {userAuthenticated ? <LandingPage /> : <Dashboard />}
      <Box display={{ xs: "none", sm: "none", lg: "block", md: "none" }}>
        <img
          src="https://i.imgur.com/ZBvrLmY.png"
          alt="astronaut on planet"
          style={{ position: "absolute", zIndex: "2", top: "57.4%" }}
        />
      </Box>
    </ThemeProvider>
  );
};

const Index: React.FC = () => {
  return (
    <RecoilRoot>
      <App />
    </RecoilRoot>
  );
};

export default Index;
