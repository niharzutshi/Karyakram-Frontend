import React from "react";

import LandingPage from "./landingPage";
import Dashboard from "./dashboard";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase/clientApp";

const App = () => {
  const [user] = useAuthState(auth);

  return <>{!user ? <LandingPage /> : <Dashboard />}</>;
};

export default App;
