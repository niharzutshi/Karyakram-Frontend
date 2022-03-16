/* eslint-disable @typescript-eslint/ban-ts-comment */
import React from 'react';
import Box from '@mui/material/Box';

import './RightPanelUpper.scss';

import { ExpandableCard } from '@components/ExpandableCard/ExpandableCard';

export const RightPanelUpper = () => {
  return (
    <Box
      className="right-panel__container"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#242424',
        borderRadius: '25px',
        width: '350px',
        marginTop: 8
      }}>
      <ExpandableCard color="#432452" width="100%" />
      <ExpandableCard color="#432452" width="100%" />
      <ExpandableCard color="#432452" width="100%" />
    </Box>
  );
};
