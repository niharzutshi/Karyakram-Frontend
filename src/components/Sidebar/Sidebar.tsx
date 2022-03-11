// import React from 'react';
// import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
// import { FaGem, FaHeart } from 'react-icons/fa';

// import 'react-pro-sidebar/dist/css/styles.css';

// export const Sidebar = () => {
//   return (
//     <ProSidebar>
//       <Menu iconShape="square">
//         <MenuItem icon={<FaGem />}>Dashboard</MenuItem>
//         <SubMenu title="Components" icon={<FaHeart />}>
//           <MenuItem>Component 1</MenuItem>
//           <MenuItem>Component 2</MenuItem>
//         </SubMenu>
//       </Menu>
//     </ProSidebar>
//   );
// };

import React from 'react';
import {
  ProSidebar,
  Menu,
  MenuItem,
  SubMenu,
  SidebarHeader,
  SidebarFooter,
  SidebarContent
} from 'react-pro-sidebar';
import { FaTachometerAlt, FaGem, FaList, FaGithub, FaRegLaughWink, FaHeart } from 'react-icons/fa';

import 'react-pro-sidebar/dist/css/styles.css';

interface ISidebar {
  collapsed: any;
  rtl: any;
}

export const Sidebar: React.FC<ISidebar> = ({ collapsed, rtl }) => {
  return (
    <ProSidebar rtl={rtl} collapsed={collapsed} toggled={true} breakPoint="md">
      <SidebarHeader>
        <div
          style={{
            padding: '24px',
            textTransform: 'uppercase',
            fontWeight: 'bold',
            fontSize: 14,
            letterSpacing: '1px',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap'
          }}>
          sidebarTitle
        </div>
      </SidebarHeader>

      <SidebarContent>
        <Menu iconShape="circle">
          <MenuItem icon={<FaTachometerAlt />} suffix={<span className="badge red">new</span>}>
            dashboard
          </MenuItem>
          <MenuItem icon={<FaGem />}> components</MenuItem>
        </Menu>
        <Menu iconShape="circle">
          <SubMenu
            suffix={<span className="badge yellow">3</span>}
            title="withSuffix"
            icon={<FaRegLaughWink />}>
            <MenuItem>submenu 1</MenuItem>
            <MenuItem>submenu 2</MenuItem>
            <MenuItem>submenu 3</MenuItem>
          </SubMenu>
          <SubMenu
            prefix={<span className="badge gray">3</span>}
            title="withPrefix"
            icon={<FaHeart />}>
            <MenuItem>submenu 1</MenuItem>
            <MenuItem>submenu 2</MenuItem>
            <MenuItem>submenu 3</MenuItem>
          </SubMenu>
          <SubMenu title="multiLevel" icon={<FaList />}>
            <MenuItem>submenu 1 </MenuItem>
            <MenuItem>submenu 2 </MenuItem>
            <SubMenu title={`$submenu 3`}>
              <MenuItem>submenu 3.1 </MenuItem>
              <MenuItem>submenu 3.2 </MenuItem>
              <SubMenu title={`$submenu 3.3`}>
                <MenuItem>submenu 3.3.1 </MenuItem>
                <MenuItem>submenu 3.3.2 </MenuItem>
                <MenuItem>submenu 3.3.3 </MenuItem>
              </SubMenu>
            </SubMenu>
          </SubMenu>
        </Menu>
      </SidebarContent>
    </ProSidebar>
  );
};
