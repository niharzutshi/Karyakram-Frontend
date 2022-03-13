import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';

import { EventDescription } from '@components/EventDescription/EventDescription';
import { RightPanelUpper } from '@components/RightPanelUpper/RightPanelUpper';
import { RightPanelLower } from '@components/RightPanelLower/RightPanelLower';

import './Event.scss';

export const Event = () => {
  return (
    <Box sx={{ flexGrow: 1, padding: 5 }}>
      <Grid container spacing={2}>
        <Grid item xs={6} md={9}>
          <Container className="event-back">
            <EventDescription />
          </Container>
        </Grid>
        <Grid item xs={4} md={3}>
          <RightPanelUpper />
          <RightPanelLower />
        </Grid>
      </Grid>
    </Box>
  );
};
