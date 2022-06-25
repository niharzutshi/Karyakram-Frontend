import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { Avatar, Typography } from "@mui/material";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase/clientApp";
import { useAuthState } from "react-firebase-hooks/auth";
import { useSetRecoilState } from "recoil";
import { authModalState } from "../../store/authModalState";

export const ProfileDropdown = () => {
  const setAuthModal = useSetRecoilState(authModalState);
  const [user] = useAuthState(auth);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const logout = () => {
    handleClose();
    signOut(auth);
    setAuthModal((prev) => ({
      ...prev,
      open: false,
    }));
  };

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        style={{
          display: "flex",
          textAlign: "center",
        }}
      >
        <Avatar
          sx={{ width: 30, height: 30 }}
          style={{ marginRight: "10px" }}
        />
        <Typography>{user?.email?.split("@")[0]}</Typography>
        <ArrowDropDownIcon />
      </Button>
      <Menu
        id="basic-menu"
        style={{ marginTop: "5px" }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={handleClose}>Wallet</MenuItem>
        <MenuItem onClick={handleClose}>My Profile</MenuItem>
        <MenuItem onClick={handleClose}>Notifications</MenuItem>
        <MenuItem onClick={handleClose}>Settings</MenuItem>
        <MenuItem onClick={logout}>Logout</MenuItem>
      </Menu>
    </div>
  );
};
