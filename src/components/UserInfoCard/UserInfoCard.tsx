import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

export const UserInfoCard = () => {
  return (
    <Card sx={{ display: "flex", backgroundColor: "242424", color: "white" }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          backgroundColor: "242424",
        }}
      >
        <CardContent sx={{ flex: "1 0 auto" }}>
          <CardMedia
            component="img"
            sx={{
              width: 120,
              height: 120,
              borderRadius: "360px",
              border: " 5px solid #800C83;",
            }}
            image="https://static.remove.bg/remove-bg-web/726c8211ef4fdb5ce44accdf843f9bab4d2a356a/assets/start_remove-c851bdf8d3127a24e2d137a55b1b427378cd17385b01aec6e59d5d4b5f39d2ec.png"
            alt="Live from space album cover"
          />
        </CardContent>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "left",
            padding: "15px",
            pl: 1,
            pb: 1,
            backgroundColor: "800C83",
            color: "white",
          }}
        >
          <Typography component="div" variant="h5">
            UserName
          </Typography>
          <Typography variant="subtitle1" component="div" color="#455a64">
            Bio
          </Typography>

          <Typography variant="subtitle1" component="div" color="#455a64">
            Availability status
          </Typography>
        </Box>
      </Box>
    </Card>
  );
};
