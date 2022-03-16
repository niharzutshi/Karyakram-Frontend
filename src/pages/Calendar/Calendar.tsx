import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Plan from './PlanMeeting';
import Calendarname from './CalendarName';

import './Calendar.scss';

import { RightPanelUpper } from '@components/RightPanelUpper/RightPanelUpper';
import { RightPanelLower } from '@components/RightPanelLower/RightPanelLower';

export const Calendar = () => {
  return (
    <Box sx={{ flexGrow: 1, padding: 5 }}>
      <Grid container spacing={2}>
        <Grid item xs={6} md={9}>
          <Container className="Calendarv">
            <Calendarname />
            <Plan />
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
