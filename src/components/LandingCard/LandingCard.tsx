import * as React from "react";
import Grid from "@mui/material/Grid";

import "./LandingCard.scss";
import { LandingInfo } from "@components/LandingInfo/LandingInfo";
export const LandingCard = () => {
  return (
    <div className="landing-card__container">
      <Grid container spacing={0} sx={{ marginLeft: "80px" }}>
        <Grid xs={7}>
          <LandingInfo />
        </Grid>

        <Grid xs={4}>
          <div className="landing-card__picture-container">
            <img
              className="landing-card__picture"
              src="https://i.imgur.com/iqukoXx.png"
              alt="trending-image"
            />
          </div>
          <div className="landing-card__price">
            0.1 <br /> ETH
          </div>
          <div className="landing-card__details">
            West End London Conference <br /> -xyz abc
            <br />
            <button className="landing-card__button">Register Now</button>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};
