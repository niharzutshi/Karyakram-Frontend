/* eslint-disable @typescript-eslint/ban-ts-comment */
import React from "react";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

export const EventCard = () => {
  return (
    <CardContent
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
        padding: "15px",
      }}
    >
      <CardMedia
        // @ts-ignore
        component="img"
        sx={{
          width: 80,
          height: 80,
          borderRadius: "360px",
          border: " 5px solid #800C83;",
        }}
        image="https://static.remove.bg/remove-bg-web/726c8211ef4fdb5ce44accdf843f9bab4d2a356a/assets/start_remove-c851bdf8d3127a24e2d137a55b1b427378cd17385b01aec6e59d5d4b5f39d2ec.png"
        alt="Live from space album cover"
      />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "left",
          color: "white",
          padding: 2,
        }}
      >
        {/*@ts-ignore*/}
        <Typography component="div" variant="h9">
          UserName
        </Typography>
        <Typography variant="subtitle1" component="div" color="#432452">
          Bio
        </Typography>
      </Box>
      <Button
        className="right-panel__button"
        style={{
          width: "30%",
          textTransform: "capitalize",
          color: "white",
          backgroundColor: "#800C83",
          borderRadius: "10px",
          height: "50%",
        }}
      >
        Register
      </Button>
    </CardContent>
  );
};
