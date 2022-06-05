import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import PersonIcon from '@mui/icons-material/Person';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import NotificationsIcon from '@mui/icons-material/Notifications';
const h1Styles = {
  height: '40px',
  width: '40px',
  borderRadius: '50%',
  margintop: '80px',
  marginRight: '5px',
  border: '5px solid #5B155D',

};

export const ProfileDropdown = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <img style={h1Styles} src="data:image/jpeg;base64,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" alt="" />

        Profile 
      <ArrowDropDownIcon/>
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}>
        <PersonIcon />

          My Profile
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <AccountBalanceWalletIcon />
          Wallet
          </MenuItem>
        <MenuItem onClick={handleClose}>
          <NotificationsIcon />
          Notifications
        </MenuItem>
      </Menu>
    </div>
  );
}