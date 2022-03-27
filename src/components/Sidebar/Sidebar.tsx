import React from 'react';
import DashboardIcon from '@mui/icons-material/Dashboard';
import HomeIcon from '@mui/icons-material/Home';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import EventIcon from '@mui/icons-material/Event';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import PersonIcon from '@mui/icons-material/Person';
import EventNoteIcon from '@mui/icons-material/EventNote';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { Drawer, List, ListItem, ListItemIcon } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import 'react-pro-sidebar/dist/css/styles.css';

export const Sidebar: React.FC = () => {
  const navigate = useNavigate();
  return (
    <Drawer
      sx={{
        width: 72,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: 72,
          display: 'flex',
          justifyContent: 'center',
          boxSizing: 'border-box',
          background:
            'rgb(57,44,93) linear-gradient(0deg, rgba(77,66,135,1) 0%, rgba(37,26,68,1) 100%)',
          overflow: 'hidden'
        }
      }}
      variant="permanent"
      anchor="left">
      <List>
        <ListItem button alignItems="center" key="h" onClick={() => navigate('/')}>
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
        </ListItem>
        <ListItem button alignItems="center" key="d" onClick={() => navigate('/dashboard')}>
          <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon>
        </ListItem>
        <ListItem button alignItems="center" key="t" onClick={() => navigate('/trending')}>
          <ListItemIcon>
            <TrendingUpIcon />
          </ListItemIcon>
        </ListItem>
        <ListItem button alignItems="center" key="e" onClick={() => navigate('/event')}>
          <ListItemIcon>
            <EventIcon />
          </ListItemIcon>
        </ListItem>
        <ListItem button alignItems="center" key="c" onClick={() => navigate('/calendar')}>
          <ListItemIcon>
            <CalendarTodayIcon />
          </ListItemIcon>
        </ListItem>
        <ListItem button alignItems="center" key="u" onClick={() => navigate('/user')}>
          <ListItemIcon>
            <PersonIcon />
          </ListItemIcon>
        </ListItem>
        <ListItem button alignItems="center" key="s" onClick={() => navigate('/schedule')}>
          <ListItemIcon>
            <EventNoteIcon />
          </ListItemIcon>
        </ListItem>
        <ListItem button alignItems="center" key="n" onClick={() => navigate('/notifications')}>
          <ListItemIcon>
            <NotificationsIcon />
          </ListItemIcon>
        </ListItem>
      </List>
    </Drawer>
  );
};
