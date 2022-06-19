import * as React from "react";
import Grid from "@mui/material/Grid";

import { LandingInfo } from "../LandingInfo/LandingInfo";

export const LandingCard = () => {
  return (
    <div style={{ zIndex: "0", padding: "50px", display: "block" }}>
      <Grid container spacing={0} sx={{ marginLeft: "80px" }}>
        <Grid item xs={7}>
          <LandingInfo />
        </Grid>

        <Grid item xs={4}>
          <div
            style={{
              zIndex: "3",
              backgroundColor: "#18082d",
              border: "1px solid black",
              width: "350px",
              height: "250px",
              borderRadius: "20px",
              marginTop: "50px",
              display: "inline-block",
            }}
          >
            <img
              style={{
                padding: "8px",
                width: "350px",
                height: "250px",
                borderRadius: "20px",
              }}
              src="https://i.imgur.com/iqukoXx.png"
              alt="trending-image"
            />
          </div>
          <div
            style={{
              marginTop: "150px",
              cursor: "default",
              fontWeight: "bold",
              textAlign: "center",
              backgroundColor: "#36226d",
              padding: "35px 10px 35px 20px",
              borderRadius: "80px 0 0 80px",
              zIndex: "2",
              float: "left",
            }}
          >
            0.1 <br /> ETH
          </div>
          <div
            style={{
              width: "300px",
              margin: "-50px 0 0 20px",
              padding: "50px 15px 10px 15px",
              zIndex: "1",
              fontWeight: "bold",
              fontSize: "18px",
              textAlign: "center",
              borderRadius: "20px",
              backgroundColor: "#211539",
            }}
          >
            West End London Conference <br /> -xyz abc
            <br />
            <button
              style={{
                margin: "10px",
                borderRadius: "12px",
                fontWeight: "bolder",
                fontSize: "15px",
                border: "none",
                backgroundColor: "white",
                padding: "15px 25px 15px 25px",
                cursor: "pointer",
              }}
            >
              Register Now
            </button>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};
