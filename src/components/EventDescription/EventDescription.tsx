/* eslint-disable @typescript-eslint/ban-ts-comment */
import React from 'react';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardContent';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import ButtonBase from '@mui/material/ButtonBase';

const Img = styled('img')({
  margin: 'auto',
  display: 'block',
  maxWidth: '100%',
  maxHeight: '100%'
});
export const EventDescription = () => {
  return (
    <Paper
      sx={{
        p: 2,
        margin: 'auto',
        flexGrow: 1,
        background: 'none'
      }}>
      <Grid container spacing={2}>
        <Grid item>
          <ButtonBase sx={{}}>
            <Img
              sx={{
                height: '100px',
                width: '100px',
                borderRadius: '360px',
                border: '5px solid #800C83'
              }}
              alt="complex"
              src="https://upload.wikimedia.org/wikipedia/commons/9/9a/Gull_portrait_ca_usa.jpg"
            />
          </ButtonBase>
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                sx={{ alignItems: 'center', justifyContent: 'center' }}>
                UserName
              </Typography>
            </Grid>
          </Grid>
          <Grid spacing={1}>
            <Button
              variant="contained"
              sx={{ backgroundColor: '#800C83', marginRight: '15px', borderRadius: '10px' }}>
              Register
            </Button>
            <Button variant="contained" sx={{ backgroundColor: '#800C83', borderRadius: '10px' }}>
              Submit
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
};
