/* eslint-disable @typescript-eslint/ban-ts-comment */
import React from 'react';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardContent';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

export const EventDescription = () => {
  return (
    <CardContent sx={{ display: 'flex', flexDirection: 'row', padding: 2, width: '100%' }}>
      <CardMedia
        component="img"
        sx={{ width: 100, height: 100, borderRadius: '360px', border: ' 5px solid #800C83;' }}
        image="https://static.remove.bg/remove-bg-web/726c8211ef4fdb5ce44accdf843f9bab4d2a356a/assets/start_remove-c851bdf8d3127a24e2d137a55b1b427378cd17385b01aec6e59d5d4b5f39d2ec.png"
        alt="Live from space album cover"
      />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'left',
          color: 'white'
        }}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'left',
            color: 'white',
            padding: 2
          }}>
          {/*@ts-ignore*/}
          <Typography component="div" variant="h4">
            Event Name
          </Typography>
          <Typography variant="h6" component="div">
            Organization
          </Typography>
        </Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'right',
            flexDirection: 'row'
          }}>
          <Button className="right-panel__button">Bookmark</Button>
          <Button className="right-panel__button">Share</Button>
        </Box>
      </Box>
    </CardContent>
  );
};
