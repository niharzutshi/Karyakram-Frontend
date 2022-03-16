import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';

import { EventDescription } from '@components/EventDescription/EventDescription';
import { RightPanelUpper } from '@components/RightPanelUpper/RightPanelUpper';
import { RightPanelLower } from '@components/RightPanelLower/RightPanelLower';
import { useTheme } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import QueryBuilderIcon from '@mui/icons-material/QueryBuilder';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import './Event.scss';

export const Event = () => {
  const theme = useTheme();
  return (
    <Box sx={{ flexGrow: 1, padding: 5 }}>
      <Grid container spacing={2}>
        <Grid item xs={6} md={9}>
          <Grid container spacing={2}>
            <Grid item xs={8}>
              <Container className="event-back">
                <EventDescription />
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam atque sint similique
                quam recusandae vitae illum, eaque beatae, qui possimus eum iste voluptas, veniam
                sunt id minima? Laudantium, perferendis officiis!
              </Container>
            </Grid>
            <Grid item xs={4} sx={{ marginTop: '55px' }}>
              <Card
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  borderRadius: '25px',
                  padding: '25px'
                }}>
                <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                  <CalendarTodayIcon
                    sx={{
                      color: '#800C83',
                      marginTop: '20px',
                      marginRight: '15px',
                      fontSize: '50px'
                    }}
                  />
                  <CardContent sx={{}}>
                    <Typography component="div" variant="h4" sx={{ marginTop: '8px' }}>
                      15 Mar
                    </Typography>
                  </CardContent>
                </Box>

                <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                  <QueryBuilderIcon
                    sx={{
                      color: '#800C83',
                      marginTop: '20px',
                      fontSize: '50px'
                    }}
                  />
                  <CardContent sx={{}}>
                    <Typography component="div" variant="h4" sx={{ marginTop: '8px' }}>
                      5:00 PM
                    </Typography>
                  </CardContent>
                </Box>

                <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                  <PeopleAltIcon
                    sx={{
                      color: '#800C83',
                      marginTop: '20px',
                      marginRight: '15px',
                      fontSize: '50px'
                    }}
                  />
                  <CardContent sx={{}}>
                    <Typography component="div" variant="h5" sx={{ marginTop: '8px' }}>
                      2.3k Participants
                    </Typography>
                  </CardContent>
                </Box>

                <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                  <LocationOnIcon
                    sx={{
                      color: '#800C83',
                      marginTop: '20px',
                      marginRight: '15px',
                      fontSize: '50px'
                    }}
                  />
                  <CardContent sx={{}}>
                    <Typography component="div" variant="h4" sx={{ marginTop: '8px' }}>
                      15 Mar
                    </Typography>
                  </CardContent>
                </Box>
                <Stack sx={{ justifyContent: 'center' }} direction="row">
                  <Button sx={{ backgroundColor: '#800C83' }} variant="contained">
                    Register
                  </Button>
                </Stack>
              </Card>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={4} md={3}>
          <RightPanelUpper />
          <RightPanelLower />
        </Grid>
      </Grid>
    </Box>
  );
};
