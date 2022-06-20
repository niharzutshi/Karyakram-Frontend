import Navbar from "./Navbar";
import React, { PropsWithChildren } from "react";
import { Box, Grid } from "@mui/material";
import { useRecoilValue } from "recoil";
import { Sidebar } from "../components/Sidebar/Sidebar";
import { userAuthState } from "../store/userAuthState";

type HomeLayoutProps = {
  children: any;
};

const HomeLayout: React.FC<PropsWithChildren<HomeLayoutProps>> = ({
  children,
}) => {
  const userAuthenticated = useRecoilValue(userAuthState);
  return (
    <Box>
      <Grid container>
        <Grid item xs={0.5}>
          <Box
            style={{
              position: "absolute",
              zIndex: "1",
              display: "flex",
              width: "100%",
            }}
          >
            {!userAuthenticated && (
              <Box
                display={{ xs: "none", sm: "none", lg: "block", md: "none" }}
              >
                <Sidebar />
              </Box>
            )}
          </Box>
        </Grid>
        <Grid item xs={11.5}>
          <Navbar />
          {children}
        </Grid>
      </Grid>
      <Box display={{ xs: "none", sm: "none", lg: "block", md: "none" }}>
        <img
          src="https://i.imgur.com/ZBvrLmY.png"
          alt="astronaut on planet"
          style={{ position: "absolute", zIndex: "2", top: "57.4%" }}
        />
      </Box>
    </Box>
  );
};

export default HomeLayout;
