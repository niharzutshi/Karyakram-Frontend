import Navbar from "./Navbar";
import React, { PropsWithChildren } from "react";
import { Box, Grid } from "@mui/material";
import { Sidebar } from "./Sidebar";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase/clientApp";
import Image from "next/image";

type HomeLayoutProps = {
  children: any;
};

const HomeLayout: React.FC<PropsWithChildren<HomeLayoutProps>> = ({
  children,
}) => {
  const [user] = useAuthState(auth);
  return (
    <Box>
      <Grid container>
        <Grid item xs={0.57}>
          <Box
            style={{
              position: "absolute",
              zIndex: "1",
              display: "flex",
              width: "100%",
            }}
          >
            {user && (
              <Box
                display={{ xs: "none", sm: "none", lg: "block", md: "none" }}
              >
                <Sidebar />
              </Box>
            )}
          </Box>
        </Grid>
        <Grid item xs={11.43}>
          <Navbar />
          {children}
        </Grid>
      </Grid>
      <Box
        display={{ xs: "none", sm: "none", lg: "block", md: "none" }}
        position="absolute"
        top="56%"
      >
        <Image
          height="320px"
          width="180px"
          src="https://i.imgur.com/ZBvrLmY.png"
          alt="astronaut on planet"
          style={{ position: "absolute", zIndex: "2", top: "-57.4%" }}
        />
      </Box>
    </Box>
  );
};

export default HomeLayout;
