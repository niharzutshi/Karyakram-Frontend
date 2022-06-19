/* eslint-disable @typescript-eslint/ban-ts-comment */
import React from "react";
import Box from "@mui/material/Box";

import { ExpandableCard } from "../ExpandableCard/ExpandableCard";
import { Typography } from "@mui/material";

// @ts-ignore
import style from "./RightPanelUpper.module.scss";

export const RightPanelUpper = () => {
  return (
    <Box
      className={style["right-panel__container"]}
      sx={{
        padding: "20px",
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
