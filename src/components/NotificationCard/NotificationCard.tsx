import React from "react";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import CancelIcon from "@mui/icons-material/Cancel";

interface NotificationCardProps {
  // 1 = upcoming event / some update
  // 2 = invite
  // 3 = Reminder
  type: number;
  title: string;
}

const notificationCardButtonStyle = {
  textTransform: "none",
  color: "white",
  background: "none",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
  padding: "5px 10px 5px 10px",
  backgroundColor: "#734273",
  marginRight: "10px",
};

export const NotificationCard: React.FC<NotificationCardProps> = ({
  type,
  title,
}) => {
  return (
    <Card
      sx={{
        width: "345px",
        margin: "15px 15px 15px 20px",
        backgroundColor: "#644bab",
        borderRadius: "10px ",
        color: "white ",
        cursor: "default",
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
        flexDirection: "column",
        padding: "5px 15px 5px 15px ",
      }}
    >
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Grid item sx={{ marginLeft: "10px", fontSize: "17px" }}>
          <span
            style={{
              fontWeight: "bold",
            }}
          >
            {type === 1 ? "Upcoming: " : type === 2 ? "Invite: " : "Reminder: "}
          </span>
          {title}
        </Grid>
        <Box display="flex">
          {(type === 1 || type === 3) && (
            // @ts-ignore
            <button style={notificationCardButtonStyle}>Learn More</button>
          )}
          {type === 2 && (
            <Box>
              {/* @ts-ignore */}
              <button style={notificationCardButtonStyle}>Reject</button>
              {/* @ts-ignore */}
              <button style={notificationCardButtonStyle}>Accept</button>
            </Box>
          )}
          <CancelIcon style={{ cursor: "pointer", marginTop: "1px" }} />
        </Box>
      </Box>
    </Card>
  );
};
