import React from "react";
import { TrendingCard } from "@components/TrendingCard/TrendingCard";
import TrendingHighlight from "@components/TrendingHighlight/TrendingHighlight";
import { Box, Button, Grid, Typography } from "@mui/material";
import Navbar from "@components/Navbar/Navbar";
import { RightPanelLower } from "@components/RightPanelLower/RightPanelLower";
import { RightPanelUpper } from "@components/RightPanelUpper/RightPanelUpper";

export const Trending = () => {
  return (
    <>
      <Navbar />
      <Grid container>
        <Grid item md={9} pl={6}>
          <TrendingHighlight />
          <Box mt={4} display="flex" alignItems="center">
            <Typography variant="h5" fontWeight={600}>
              Trending Events
            </Typography>
            <Button
              style={{
                border: "4px solid #800C83",
                textTransform: "capitalize",
                borderRadius: 12,
                marginLeft: 12,
              }}
            >
              Coming soon
            </Button>
          </Box>
          <Box
            display="flex"
            flexDirection="row"
            mt={3}
            ml={3}
            className="trending-card-container"
          >
            <TrendingCard />
            <TrendingCard />
            <TrendingCard />
            <TrendingCard />
          </Box>
        </Grid>
        <Grid item md={3} display={{ lg: "block", sm: "none", md: "none" }}>
          <RightPanelUpper />
          <RightPanelLower />
        </Grid>
      </Grid>
    </>
  );
};
