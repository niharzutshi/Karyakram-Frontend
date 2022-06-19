/* eslint-disable @typescript-eslint/ban-ts-comment */
import React from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import ButtonBase from "@mui/material/ButtonBase";
import img from "next/image";

// @ts-ignore
const Img = styled("img")({
  margin: "auto",
  display: "block",
  maxWidth: "100%",
  maxHeight: "100%",
});
export const EventDescription = () => {
  return (
    <Grid container spacing={2} sx={{ marginTop: "10px" }}>
      <Grid item>
        <ButtonBase sx={{}}>
          <img
            style={{
              height: "100px",
              width: "100px",
              borderRadius: "360px",
              border: "5px solid #800C83",
            }}
            alt="complex"
            src="https://upload.wikimedia.org/wikipedia/commons/9/9a/Gull_portrait_ca_usa.jpg"
          />
        </ButtonBase>
      </Grid>
      <Grid item xs={12} sm container>
        <Grid container xs direction="column" spacing={2}>
          <Grid item xs>
            <Typography
              variant="h5"
              component="div"
              sx={{ alignItems: "center", justifyContent: "center" }}
            >
              UserName
            </Typography>
          </Grid>
        </Grid>
        <Grid spacing={1}>
          <Button
            variant="contained"
            sx={{
              marginRight: "15px",
              borderRadius: "10px",
              backgroundColor: "#800C83",
              textTransform: "none",
              color: "white",
              "&:hover": {
                backgroundColor: "white",
                color: "black",
              },
            }}
          >
            Register
          </Button>
          <Button
            variant="contained"
            sx={{
              borderRadius: "10px",
              backgroundColor: "#800C83",
              textTransform: "none",
              color: "white",
              "&:hover": {
                backgroundColor: "white",
                color: "black",
              },
            }}
          >
            Submit
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};
