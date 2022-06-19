import React from "react";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { Drawer, List, ListItem, ListItemIcon } from "@mui/material";
import Tooltip from "@mui/material/Tooltip";
import { useRecoilValue } from "recoil";

// import "./Sidebar.module.scss";

import { selectedPageState } from "@src/store/selectedPageState";
import { useRouter } from "next/router";

export const Sidebar: React.FC = () => {
  const selectedPage = useRecoilValue(selectedPageState).selectedPage;
  const router = useRouter();

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
          onClick={() => router.push("/")}
          style={{
            backgroundColor: selectedPage === "home" ? "#4D0A6D" : "",
          }}
        >
          <Tooltip title="Home">
            <ListItemIcon className="karyakram-logo">
              <img src={"../../assets/images/K.svg"} />
            </ListItemIcon>
          </Tooltip>
        </ListItem>
        <ListItem
          button
          alignItems="center"
          key="n"
          onClick={() => router.push("/notifications")}
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
          onClick={() => router.push("/trending")}
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
          onClick={() => router.push("/calendar")}
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
