import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';

export default function CalendarName() {
  const theme = useTheme();

  return (
    <Card sx={{ display: 'flex', backgroundColor: '242424', color: 'white' }}>
      <Box sx={{ display: 'flex', flexDirection: 'row', backgroundColor: '242424' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <CardMedia
            component="img"
            sx={{ width: 120, height: 120, borderRadius: '360px', border: ' 5px solid #800C83;' }}
            image="https://static.remove.bg/remove-bg-web/726c8211ef4fdb5ce44accdf843f9bab4d2a356a/assets/start_remove-c851bdf8d3127a24e2d137a55b1b427378cd17385b01aec6e59d5d4b5f39d2ec.png"
            alt="Live from space album cover"
          />
        </CardContent>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'left',
            padding: '15px',
            pl: 1,
            pb: 1,
            backgroundColor: '800C83',
            color: 'white'
          }}>
          <Typography component="div" variant="h5">
            Why BTS though
          </Typography>
          <Typography variant="subtitle1" component="div" color="#455a64">
            I am still confused
          </Typography>

          <Typography variant="subtitle1" component="div" color="#455a64">
            What to write here to check if it all is working okayish
          </Typography>
        </Box>
      </Box>
    </Card>
  );
}
