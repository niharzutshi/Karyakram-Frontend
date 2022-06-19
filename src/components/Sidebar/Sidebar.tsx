import React from "react";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { Drawer, List, ListItem, ListItemIcon } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Tooltip from "@mui/material/Tooltip";
import { useRecoilValue } from "recoil";

import KaryakramIcon from "../../assets/images/K.svg";
import "./Sidebar.scss";

import { selectedPageState } from "@src/store/selectedPageState";

export const Sidebar: React.FC = () => {
  const selectedPage = useRecoilValue(selectedPageState).selectedPage;
  const navigate = useNavigate();

  return (
    <Drawer
      sx={{
        width: 72,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: 72,
          paddingTop: 1,
          display: "flex",
          boxSizing: "border-box",
          background:
            "linear-gradient(0deg, rgba(80,8,117,1) 0%, rgba(52,8,100,1) 100%);",
          overflow: "hidden",
        },
      }}
      variant="permanent"
      anchor="left"
    >
      <List className="sidebar-icon-list">
        <ListItem
          button
          alignItems="center"
          key="h"
          onClick={() => navigate("/")}
          style={{
            backgroundColor: selectedPage === "home" ? "#4D0A6D" : "",
          }}
        >
          <Tooltip title="Home">
            <ListItemIcon className="karyakram-logo">
              <img src={KaryakramIcon} />
            </ListItemIcon>
          </Tooltip>
        </ListItem>
        <ListItem
          button
          alignItems="center"
          key="n"
          onClick={() => navigate("/notifications")}
          style={{
            backgroundColor: selectedPage === "notifications" ? "#4D0A6D" : "",
          }}
        >
          <Tooltip title="Notificaitons">
            <ListItemIcon>
              <NotificationsIcon fontSize="large" sx={{ color: "white" }} />
            </ListItemIcon>
          </Tooltip>
        </ListItem>
        <ListItem
          button
          alignItems="center"
          key="t"
          onClick={() => navigate("/trending")}
          style={{
            backgroundColor: selectedPage === "trending" ? "#4D0A6D" : "",
          }}
        >
          <Tooltip title="Trending">
            <ListItemIcon>
              <TrendingUpIcon fontSize="large" sx={{ color: "white" }} />
            </ListItemIcon>
          </Tooltip>
        </ListItem>
        <ListItem
          button
          alignItems="center"
          key="c"
          onClick={() => navigate("/calendar")}
          style={{
            backgroundColor: selectedPage === "calendar" ? "#4D0A6D" : "",
          }}
        >
          <Tooltip title="Calendar">
            <ListItemIcon>
              <CalendarTodayIcon fontSize="large" sx={{ color: "white" }} />
            </ListItemIcon>
          </Tooltip>
        </ListItem>
      </List>
    </Drawer>
  );
};
