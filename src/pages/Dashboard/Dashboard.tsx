import React, { useEffect } from "react";
import { Box, Grid, Typography } from "@mui/material";
import { useSetRecoilState } from "recoil";

import DashboardGlobe from "@components/DashboardGlobe/DashboardGlobe";
import { ExpandableCard } from "@components/ExpandableCard/ExpandableCard";
import HomeLayout from "@src/layouts/HomeLayout";
import { selectedPageState } from "@src/store/selectedPageState";

import "./Dashboard.module.scss";

export const Dashboard = () => {
  const setSelectedPageState = useSetRecoilState(selectedPageState);

  useEffect(() => {
    setSelectedPageState({
      selectedPage: "home",
    });
  }, []);

  return (
    <HomeLayout>
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
    </HomeLayout>
  );
};
