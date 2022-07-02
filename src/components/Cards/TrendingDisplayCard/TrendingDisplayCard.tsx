import { Box, Button, Typography } from "@mui/material";
import React from "react";
import Image from "next/image";

type TrendingDisplayCardProps = {};

const TrendingDisplayCard: React.FC<TrendingDisplayCardProps> = () => {
  return (
    <Box
      mt="auto"
      position="relative"
      display="block"
      bgcolor="#2D2D2D"
      width="150px"
      margin="100px"
      borderRadius={6}
    >
      <div
        style={{
          position: "absolute",
          top: "-95px",
          textAlign: "center",
          width: "100%",
          zIndex: "2",
        }}
      >
        <Image
          alt="user profile"
          src="https://static.remove.bg/remove-bg-web/726c8211ef4fdb5ce44accdf843f9bab4d2a356a/assets/start_remove-c851bdf8d3127a24e2d137a55b1b427378cd17385b01aec6e59d5d4b5f39d2ec.png"
          style={{
            width: "100px",
            height: "100px",
            display: "block",
            borderRadius: "120px",
            margin: "30px auto 0",
            border: "4px solid #79507A",
            objectFit: "cover",
          }}
        />
      </div>
      <Box
        pt={5}
        pb={2}
        justifyContent="center"
        alignItems="center"
        textAlign="center"
      >
        <Typography variant="h6" color="white" style={{ cursor: "default " }}>
          Event Name
        </Typography>
        <Typography color="gray" style={{ cursor: "default " }}>
          Organization
        </Typography>
        <Typography color="white" style={{ cursor: "default " }}>
          Date
        </Typography>
        <Button
          style={{
            marginTop: "15px",
            backgroundColor: "#800C83",
            borderRadius: 8,
            padding: "10px 20px 10px 20px",
            color: "white",
            textTransform: "capitalize",
          }}
        >
          Register
        </Button>
      </Box>
    </Box>
  );
};

export default TrendingDisplayCard;
