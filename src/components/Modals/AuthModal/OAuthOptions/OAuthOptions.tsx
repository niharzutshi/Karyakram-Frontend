import { LoadingButton } from "@mui/lab";
import { Button, Box, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useSetRecoilState } from "recoil";

import { auth } from "../../../../firebase/clientApp";
import { authModalState } from "../../../../store/authModalState";

export const OAuthOptions: React.FC = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const setModalState = useSetRecoilState(authModalState);
  return (
    <Box
      display="flex"
      flexDirection="column"
      width="100%"
      mb={4}
      justifyContent="center"
      alignItems="center"
    >
      {loading ? (
        <LoadingButton
          loading={true}
          style={{
            height: "45px",
            border: "1px solid white",
            textTransform: "none",
            color: "white",
            borderRadius: "15px",
            padding: "10px",
            width: "70%",
          }}
        />
      ) : (
        <Button
          style={{
            textTransform: "none",
            border: "1px solid white",
            color: "white",
            borderRadius: "15px",
            padding: "10px",
            width: "70%",
          }}
          onClick={() => {
            signInWithGoogle();
          }}
        >
          <Image
            alt="Google Logo"
            src="https://i.imgur.com/vmMQ8OV.png"
            height="20px"
            style={{ marginRight: "10px" }}
          />
          Continue with Google
        </Button>
      )}
      <Typography
        style={{
          marginTop: "5px",
          fontSize: "10px",
          color: "red",
          cursor: "default",
        }}
      >
        {error?.message}
      </Typography>
    </Box>
  );
};
