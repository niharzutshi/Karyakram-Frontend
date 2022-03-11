import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import './Calendar.scss';
import Plan from './PlanMeeting';
import Calendarname from './CalendarName';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary
}));

export const Calendar = () => {
  return (
    <Box sx={{ flexGrow: 1, padding: 5 }}>
      <Grid container spacing={2}>
        <Grid item xs={6} md={9}>
          <React.Fragment>
            <CssBaseline />
            <Container className="Calendarv" >
              <Calendarname />
              <Plan />
            </Container>
          </React.Fragment>
        </Grid>
        <Grid item xs={4} md={3}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              backgroundColor: '#242424',
              borderRadius: '25px',
              width: '350px',
              marginTop: 8
            }}>
            <CardContent sx={{ display: 'flex', flexDirection: 'row', padding: 2 }}>
              <CardMedia
                component="img"
                sx={{ width: 80, height: 80, borderRadius: '360px', border: ' 5px solid #800C83;' }}
                image="https://static.remove.bg/remove-bg-web/726c8211ef4fdb5ce44accdf843f9bab4d2a356a/assets/start_remove-c851bdf8d3127a24e2d137a55b1b427378cd17385b01aec6e59d5d4b5f39d2ec.png"
                alt="Live from space album cover"
              />
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'left',
                  color: 'white',
                  padding: 2
                }}>
                <Typography component="div" variant="h7">
                  Why BTS though
                </Typography>
                <Typography variant="subtitle1" component="div" color="#455a64">
                  I am still confused
                </Typography>
              </Box>
            </CardContent>

            <CardContent sx={{ display: 'flex', flexDirection: 'row', padding: 2 }}>
              <CardMedia
                component="img"
                sx={{ width: 80, height: 80, borderRadius: '360px', border: ' 5px solid #800C83;' }}
                image="https://static.remove.bg/remove-bg-web/726c8211ef4fdb5ce44accdf843f9bab4d2a356a/assets/start_remove-c851bdf8d3127a24e2d137a55b1b427378cd17385b01aec6e59d5d4b5f39d2ec.png"
                alt="Live from space album cover"
              />
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'left',
                  color: 'white',
                  padding: 2
                }}>
                <Typography component="div" variant="h7">
                  Why BTS though
                </Typography>
                <Typography variant="subtitle1" component="div" color="#455a64">
                  I am still confused
                </Typography>
              </Box>
            </CardContent>
          </Box>

          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              backgroundColor: '#242424',
              borderRadius: '25px',
              width: '350px',
              marginTop: 10
            }}>
            <CardContent sx={{ display: 'flex', flexDirection: 'row', padding: 2 }}>
              <CardMedia
                component="img"
                sx={{ width: 80, height: 80, borderRadius: '360px', border: ' 5px solid #800C83;' }}
                image="https://static.remove.bg/remove-bg-web/726c8211ef4fdb5ce44accdf843f9bab4d2a356a/assets/start_remove-c851bdf8d3127a24e2d137a55b1b427378cd17385b01aec6e59d5d4b5f39d2ec.png"
                alt="Live from space album cover"
              />
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'left',
                  color: 'white',
                  padding: 2
                }}>
                <Typography component="div" variant="h7">
                  Why BTS though
                </Typography>
                <Typography variant="subtitle1" component="div" color="#455a64">
                  I am still confused
                </Typography>
              </Box>
            </CardContent>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
