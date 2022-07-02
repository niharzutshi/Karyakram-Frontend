import * as React from "react";
import Grid from "@mui/material/Grid";
import { useSetRecoilState } from "recoil";

import { LandingInfo } from "../LandingInfo/LandingInfo";
import { authModalState } from "../../../store/authModalState";
import Image from "next/image";

export const LandingCard = () => {
  const setModalState = useSetRecoilState(authModalState);
  return (
    <div
      style={{
        display: "block",
      }}
    >
      <Grid container spacing={0} sx={{ paddingLeft: "100px" }} mb="20px">
        <Grid item xs={5.7} pt="40px">
          <LandingInfo />
        </Grid>

        <Grid item xs={4} mt="80px">
          <span
            style={{
              marginLeft: "65px",
              fontSize: "22px",
              fontWeight: "bold",
              cursor: "default",
            }}
          >
            Trending Now
          </span>
          <div
            style={{
              zIndex: "3",
              backgroundColor: "#18082d",
              border: "1px solid black",
              width: "480px",
              height: "300px",
              borderRadius: "20px",
              display: "inline-block",
              marginLeft: "60px",
            }}
          >
            <Image
              style={{
                padding: "8px",
                width: "480px",
                height: "300px",
                borderRadius: "20px",
              }}
              src="https://i.imgur.com/iqukoXx.png"
              alt="trending-image"
            />
          </div>
          <div
            style={{
              marginTop: "-140px",
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
              width: "400px",
              margin: "-50px 0 0 20px",
              padding: "50px 15px 10px 15px",
              zIndex: "1",
              fontWeight: "bold",
              fontSize: "20px",
              textAlign: "center",
              borderRadius: "20px",
              backgroundColor: "#211539",
              cursor: "default",
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
                color: "#5120A0",
              }}
              onClick={() => {
                setModalState({ open: true, view: "signup" });
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
