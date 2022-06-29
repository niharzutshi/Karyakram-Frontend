import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

import { LandingCard } from "../../components/Landing/LandingCard/LandingCard";
import { LandingPageHeader } from "../../components/Landing/LandingPageHeader/LandingPageHeader";
import { LandingPageFooter } from "../../components/Landing/LandingPageFooter/LandingPageFooter";

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
      <Box display={{ xs: "none", sm: "none", lg: "block", md: "none" }}>
        <img
          src="https://i.imgur.com/ZBvrLmY.png"
          alt="astronaut on planet"
          style={{ position: "absolute", zIndex: "2", top: "56%" }}
        />
      </Box>
    </Box>
  );
};

export default LandingPage;
