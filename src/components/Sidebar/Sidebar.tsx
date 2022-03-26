import React from 'react';
import './Sidebar.scss';
import DashboardIcon from '@mui/icons-material/Dashboard';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import EventIcon from '@mui/icons-material/Event';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import PersonIcon from '@mui/icons-material/Person';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { Drawer, List, ListItem, ListItemIcon } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Tooltip from '@mui/material/Tooltip';

import KaryakramIcon from '../../assets/images/K.svg';

export const Sidebar: React.FC = () => {
  const navigate = useNavigate();
  return (
    <Drawer
      sx={{
        width: 72,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: 72,
          paddingTop: 1,
          display: 'flex',
          boxSizing: 'border-box',
          background: 'linear-gradient(0deg, rgba(80,8,117,1) 0%, rgba(52,8,100,1) 100%);',
          overflow: 'hidden'
        }
      }}
      variant="permanent"
      anchor="left">
      <List className="sidebar-icon-list">
        <ListItem button alignItems="center" key="h" onClick={() => navigate('/')}>
          <Tooltip title="Home">
            <ListItemIcon className="karyakram-logo">
              <img src={KaryakramIcon} />
            </ListItemIcon>
          </Tooltip>
        </ListItem>
        <ListItem button alignItems="center" key="n" onClick={() => navigate('/notifications')}>
          <Tooltip title="Notificaitons">
            <ListItemIcon>
              <NotificationsIcon fontSize="large" sx={{ color: 'white' }} />
            </ListItemIcon>
          </Tooltip>
        </ListItem>
        <ListItem button alignItems="center" key="d" onClick={() => navigate('/dashboard')}>
          <Tooltip title="Dasboard">
            <ListItemIcon>
              <DashboardIcon fontSize="large" sx={{ color: 'white' }} />
            </ListItemIcon>
          </Tooltip>
        </ListItem>
        <ListItem button alignItems="center" key="t" onClick={() => navigate('/trending')}>
          <Tooltip title="Trending">
            <ListItemIcon>
              <TrendingUpIcon fontSize="large" sx={{ color: 'white' }} />
            </ListItemIcon>
          </Tooltip>
        </ListItem>
        <ListItem button alignItems="center" key="e" onClick={() => navigate('/event')}>
          <Tooltip title="Event">
            <ListItemIcon>
              <EventIcon fontSize="large" sx={{ color: 'white' }} />
            </ListItemIcon>
          </Tooltip>
        </ListItem>
        <ListItem button alignItems="center" key="c" onClick={() => navigate('/calendar')}>
          <Tooltip title="Calendar">
            <ListItemIcon>
              <CalendarTodayIcon fontSize="large" sx={{ color: 'white' }} />
            </ListItemIcon>
          </Tooltip>
        </ListItem>
        <ListItem button alignItems="center" key="u" onClick={() => navigate('/user')}>
          <Tooltip title="User">
            <ListItemIcon>
              <PersonIcon fontSize="large" sx={{ color: 'white' }} />
            </ListItemIcon>
          </Tooltip>
        </ListItem>
      </List>
    </Drawer>
  );
};
