import { Grid } from "@mui/material";
import Image from "next/image";
import React from "react";
import { useSetRecoilState } from "recoil";

import { authModalState } from "../../../store/authModalState";

export const LandingInfo = () => {
  const setModalState = useSetRecoilState(authModalState);
  return (
    <Grid
      container
      direction="row"
      sx={{
        borderRadius: "20px",
        backgroundImage: 'url("https://i.imgur.com/uzRn7vO.png")',
        backgroundSize: "contain",
        height: "500px",
        width: "600px",
        padding: "20px",
      }}
    >
      <Grid item xs={7}>
        <div
          style={{
            cursor: "default",
            padding: "50px 0 0 20px",
            fontWeight: "bold",
            fontSize: "30px",
          }}
        >
          Link your Calendar
          <br />
          <span style={{ color: "#CE6432" }}>Check Availability</span>
          <br />
          and
          <br />
          <span style={{ color: "#D53A7A" }}>Plan Meetings</span>
        </div>
        <button
          style={{
            color: "#49169c",
            margin: "40px 0 0 20px",
            borderRadius: "17px",
            fontWeight: "bolder",
            fontSize: "20px",
            border: "none",
            backgroundColor: "white",
            padding: "15px 30px 15px 30px",
            cursor: "pointer",
            width: "220px",
            position: "relative",
          }}
          onClick={() => {
            setModalState({ open: true, view: "signup" });
          }}
        >
          Get Started
        </button>
      </Grid>
      <Grid
        item
        xs={5}
        display="flex"
        flexDirection="column"
        justifyContent="flex-end"
      >
        <Image
          src="https://i.imgur.com/YuUnLZS.png"
          alt="astronaut2"
          height="270px"
          width="290px"
        />
      </Grid>
    </Grid>
  );
};
