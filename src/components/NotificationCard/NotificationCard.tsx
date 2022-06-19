import React from "react";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import CancelIcon from "@mui/icons-material/Cancel";

import "./NotificationCard.module.scss";

interface NotificationCardProps {
  // 1 = upcoming event / some update
  // 2 = invite
  // 3 = Reminder
  type: number;
  title: string;
}

export const NotificationCard: React.FC<NotificationCardProps> = ({
  type,
  title,
}) => {
  return (
    <Card
      className="notification-card__container"
      sx={{
        height: "50px",
        width: "900px",
        backgroundColor: "#521853",
      }}
    >
      <Box className="main-grid">
        <Grid item className="notification-card__details">
          <span className="notification-card__details-title">
            {type === 1 ? "Upcoming: " : type === 2 ? "Invite: " : "Reminder: "}
          </span>
          {title}
        </Grid>
        <Box className="button-box">
          {(type === 1 || type === 3) && (
            <button className="notification-card__buttons">Learn More</button>
          )}
          {type === 2 && (
            <Box>
              <button className="notification-card__buttons">Reject</button>
              <button className="notification-card__buttons">Accept</button>
            </Box>
          )}
          <CancelIcon className="notification-card__close-button" />
        </Box>
      </Box>
    </Card>
  );
};
