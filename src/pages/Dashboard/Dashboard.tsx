import React from "react";
import { useRecoilState } from "recoil";

import { darkThemeSelectedState } from "@src/store/DarkThemeSelectedState";

import DashboardGlobe from "@components/DashboardGlobe/DashboardGlobe";
import { ExpandableCard } from "@components/ExpandableCard/ExpandableCard";
import { Box, Grid, Typography } from "@mui/material";

import "./Dashboard.scss";
import Navbar from "@components/Navbar/Navbar";

export const Dasboard = () => {
  return (
    <Box display="block">
      <Navbar />
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <Grid container>
            <Grid item xs={12} md={12} lg={6} className="event-list">
              <Typography variant="h5" style={{ fontWeight: 500 }}>
                Current Events
              </Typography>
              <ExpandableCard />
              <ExpandableCard />
              <ExpandableCard />
              <ExpandableCard />
            </Grid>
            <Grid item xs={12} md={12} lg={6} className="event-list-right">
              <Typography variant="h5" style={{ fontWeight: 500 }}>
                Upcoming Events
              </Typography>
              <ExpandableCard />
              <ExpandableCard />
              <ExpandableCard />
              <ExpandableCard />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={4}>
          <Box display={{ lg: "flex", md: "none", sm: "none", xs: "none" }}>
            <DashboardGlobe />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};
