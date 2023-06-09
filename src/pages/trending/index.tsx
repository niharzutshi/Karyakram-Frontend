import React, { useEffect } from "react";
import { Box, Button, Grid, Typography } from "@mui/material";
import { useSetRecoilState } from "recoil";

import { RightPanelLower } from "../../components/Globals/RightPanelLower/RightPanelLower";
import { RightPanelUpper } from "../../components/Globals/RightPanelUpper/RightPanelUpper";
import { TrendingCard } from "../../components/Cards/TrendingCard/TrendingCard";
import TrendingHighlight from "../../components/Trending/TrendingHighlight/TrendingHighlight";
import HomeLayout from "../../components/Layouts/HomeLayout";
import { selectedPageState } from "../../store/selectedPageState";

const Trending = () => {
  const setSelectedPageState = useSetRecoilState(selectedPageState);

  useEffect(() => {
    setSelectedPageState({
      selectedPage: "trending",
    });
  }, []);

  return (
    <HomeLayout>
      <Grid container mt={2}>
        <Grid item md={9} pl={8}>
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
          <Grid
            container
            display="flex"
            flexDirection="row"
            mt={3}
            ml={3}
            columnSpacing={2}
          >
            <Grid item>
              <TrendingCard />
            </Grid>
            <Grid item>
              <TrendingCard />
            </Grid>
            <Grid item>
              <TrendingCard />
            </Grid>
            <Grid item>
              <TrendingCard />
            </Grid>
          </Grid>
        </Grid>
        <Grid item md={3} display={{ lg: "block", sm: "none", md: "none" }}>
          <RightPanelUpper />
          <RightPanelLower />
        </Grid>
      </Grid>
    </HomeLayout>
  );
};

export default Trending;
