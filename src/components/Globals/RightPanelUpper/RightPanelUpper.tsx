/* eslint-disable @typescript-eslint/ban-ts-comment */
import React from "react";
import Box from "@mui/material/Box";

import { ExpandableCard } from "../../Cards/ExpandableCard/ExpandableCard";
import { Typography } from "@mui/material";

export const RightPanelUpper = () => {
  return (
    <Box
      className="right-panel__container"
      sx={{
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#242424",
        borderRadius: "25px",
        width: "350px",
        alignItems: "center",
        paddingTop: 2,
        overflowY: "scroll",
        overflowX: "scroll",
        height: "300px",
      }}
    >
      <Typography variant="h5" color="white" style={{ cursor: "default" }}>
        Events For You
      </Typography>
      <ExpandableCard color="#800C83" width="100%" />
      <ExpandableCard color="#800C83" width="100%" />
    </Box>
  );
};
