import { Box } from "@mui/system";
import { useRouter } from "next/router";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import HomeLayout from "../../components/Layouts/HomeLayout";
import { auth } from "../../firebase/clientApp";
import Calendar from "../calendar";
import Userprofile from "../userprofile";
import index from "../userprofile";

const User = () => {
  const [user] = useAuthState(auth);
  const router = useRouter();
  return (
    <>
      {user?.email?.split("@")[0] === router.query.user ? (
        <HomeLayout>
          <Box
            sx={{
              padding: "20px",
            }}
          >
            <Userprofile />
          </Box>
        </HomeLayout>
      ) : (
        <Box>
          In this calendar page we will pass props that will adjust the
          components according to the page we want to render
          <Calendar />
        </Box>
      )}
    </>
  );
};

export default User;
