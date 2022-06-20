import React from "react";
import { useRecoilValue } from "recoil";

import { userAuthState } from "../store/userAuthState";
import LandingPage from "./landingPage";
import Dashboard from "./dashboard";

const App = () => {
  const userAuthenticated = useRecoilValue(userAuthState);

  return <>{userAuthenticated ? <LandingPage /> : <Dashboard />}</>;
};

export default App;
