import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

import { LandingCard } from "../../components/LandingCard/LandingCard";
import { LandingPageHeader } from "../../components/LandingPageHeader/LandingPageHeader";
import { LandingPageFooter } from "../../components/LandingPageFooter/LandingPageFooter";

const LandingPage = () => {
  return (
    <Box
      sx={{
        flexGrow: 1,
        width: "100%",
        height: "102vh",
        backgroundImage: 'url("https://i.imgur.com/O3VYjVq.png")',
        backgroundSize: "cover",
      }}
    >
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <LandingPageHeader />
        </Grid>
        <Grid item xs={12}>
          <LandingCard />
        </Grid>
        <Grid item xs={12}>
          <LandingPageFooter />
        </Grid>
      </Grid>
    </Box>
  );
};

export default LandingPage;
