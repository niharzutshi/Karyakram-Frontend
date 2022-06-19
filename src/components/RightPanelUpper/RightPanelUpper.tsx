/* eslint-disable @typescript-eslint/ban-ts-comment */
import React from "react";
import Box from "@mui/material/Box";

import "./RightPanelUpper.module.scss";

import { ExpandableCard } from "../ExpandableCard/ExpandableCard";
import { Typography } from "@mui/material";

export const RightPanelUpper = () => {
  return (
    <Box
      className="right-panel__container"
      sx={{
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#242424",
        borderRadius: "25px",
        width: "350px",
        overFlowY: "scroll",
        alignItems: "center",
        paddingTop: 2,
      }}
    >
      <Typography variant="h5" color="white" style={{ cursor: "default" }}>
        Events For You
      </Typography>
      <ExpandableCard color="#800C83" width="100%" />
      <ExpandableCard color="#800C83" width="100%" />
      <ExpandableCard color="#800C83" width="100%" />
    </Box>
  );
};
