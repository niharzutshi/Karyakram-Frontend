/* eslint-disable @typescript-eslint/ban-ts-comment */
import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import './PlanMeeting.scss';

export const PlanMeeting = () => {
  return (
    <Box sx={{ width: '100%', padding: '20px', justifyContent: 'left', marginLeft: 2 }}>
      <Typography component="div" variant="h5">
        Plan a Meeting
      </Typography>
      <Grid
        container
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        sx={{ marginTop: '30px' }}>
        <Grid item xs={6}>
          <Box sx={{ display: 'flex', flexDirection: 'row', backgroundColor: '#242424' }}>
            <CalendarTodayOutlinedIcon sx={{ color: '#800C83', transform: 'scale(1.8)' }} />
            {/*@ts-ignore*/}
            <Typography component="div" variant="h7" sx={{ marginLeft: '13px' }}>
              26 Thursday, February, 2022
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box sx={{ display: 'flex', flexDirection: 'row', backgroundColor: '#242424' }}>
            <AccessTimeOutlinedIcon sx={{ color: '#800C83', transform: 'scale(1.8)' }} />
            {/*@ts-ignore*/}
            <Typography component="div" variant="h7" sx={{ marginLeft: '13px' }}>
              2:30 - 3:00 pm
            </Typography>
          </Box>
        </Grid>

        <Box sx={{ width: '100vh' }}>
          <Stack
            spacing={2}
            direction="row"
            sx={{ padding: '15px', backgroundColor: '#242424', marginTop: 3 }}>
            <Button variant="contained" sx={{ backgroundColor: 'blueviolet' }}>
              Add Participants
            </Button>
          </Stack>
        </Box>

        <Box
          sx={{
            width: 500,
            maxWidth: '100%',
            marginTop: 3
          }}>
          <TextareaAutosize
            aria-label="minimum height"
            minRows={10}
            placeholder="Add information here that would help other to join "
            style={{
              width: '100vh',
              backgroundColor: 'lightgrey',
              color: 'white',
              borderRadius: 25,
              padding: 12
            }}
          />
        </Box>
      </Grid>

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          backgroundColor: '#242424',
          justifyContent: 'right',
          marginTop: 2
        }}>
        <Button
          variant="contained"
          sx={{ backgroundColor: 'blueviolet' }}
          endIcon={<ChevronRightIcon />}>
          Schedule Meeting
        </Button>
      </Box>
    </Box>
  );
};
