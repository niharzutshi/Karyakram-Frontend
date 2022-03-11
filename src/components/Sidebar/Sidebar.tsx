import React from 'react';
import { ProSidebar, Menu, MenuItem, SubMenu, SidebarContent } from 'react-pro-sidebar';
import { FaList } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

import 'react-pro-sidebar/dist/css/styles.css';

interface ISidebar {
  collapsed: any;
  rtl: any;
}

export const Sidebar: React.FC<ISidebar> = ({ collapsed, rtl }) => {
  const navigate = useNavigate();
  return (
    <ProSidebar rtl={rtl} collapsed={collapsed} toggled={true} breakPoint="md">
      <SidebarContent>
        <Menu iconShape="circle">
          <SubMenu title="multiLevel" icon={<FaList />}>
            <MenuItem onClick={() => navigate('/')}>Landing</MenuItem>
            <MenuItem onClick={() => navigate('/dashboard')}>Dashboard</MenuItem>
            <MenuItem onClick={() => navigate('/trending')}>Trending</MenuItem>
            <MenuItem onClick={() => navigate('/event')}>Event</MenuItem>
            <MenuItem onClick={() => navigate('/calendar')}>Calendar</MenuItem>
            <MenuItem onClick={() => navigate('/user')}>User Profile</MenuItem>
            <MenuItem onClick={() => navigate('/schedule')}>Schedule</MenuItem>
            <MenuItem onClick={() => navigate('/notifications')}>Notifications</MenuItem>
          </SubMenu>
        </Menu>
      </SidebarContent>
    </ProSidebar>
  );
};
