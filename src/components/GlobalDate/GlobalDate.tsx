import { Box } from "@mui/material";
import React from "react";

import "./GlobalDate.scss";

type GlobalDateProps = {};

const GlobalDate: React.FC<GlobalDateProps> = () => {
  return <Box className="global-date-container">8 Feb</Box>;
};

export default GlobalDate;
