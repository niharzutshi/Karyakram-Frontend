import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';

import { LandingCard } from '@components/LandingCard/LandingCard';
import { LandingPageHeader } from '@components/LandingPageHeader/LandingPageHeader';
import { LandingPageFooter} from '@components/LandingPageFooter/LandingPageFooter';

import './LandingPage.scss';

export const LandingPage = () => {
  return (
    <Box sx={{ flexGrow: 1 }} className="landing__container">
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
