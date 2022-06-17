/* eslint-disable @typescript-eslint/ban-ts-comment */
import React from "react";
import Box from "@mui/material/Box";

import "./RightPanelLower.scss";
import { EventCard } from "@components/EventCard/EventCard";

export const RightPanelLower = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#242424",
        borderRadius: "25px",
        width: "350px",
        marginTop: 10,
      }}
    >
      <EventCard />
      <EventCard />
      <EventCard />
    </Box>
  );
};
