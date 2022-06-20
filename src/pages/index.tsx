import React from "react";
import { Box } from "@mui/material";
import { useRecoilValue } from "recoil";

import { Sidebar } from "../components/Sidebar/Sidebar";

import { userAuthState } from "../store/userAuthState";

import "./App.module.scss";
import LandingPage from "./landingPage";
import Dashboard from "./dashboard";

const App = () => {
  const userAuthenticated = useRecoilValue(userAuthState);

  return <>{userAuthenticated ? <LandingPage /> : <Dashboard />}</>;
};

export default App;
