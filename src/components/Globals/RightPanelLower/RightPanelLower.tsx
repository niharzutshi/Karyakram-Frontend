/* eslint-disable @typescript-eslint/ban-ts-comment */
import React from "react";
import Box from "@mui/material/Box";

import { EventCard } from "../../Cards/EventCard/EventCard";
import { Typography } from "@mui/material";

export const RightPanelLower = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#242424",
        borderRadius: "25px",
        width: "350px",
        marginTop: 2,
        justifyContent: "center",
        alignItems: "center",
        paddingTop: 2,
      }}
    >
      <Typography variant="h5" color="white" style={{ cursor: "default" }}>
        Events For You
      </Typography>
      <EventCard />
      <EventCard />
    </Box>
  );
};
