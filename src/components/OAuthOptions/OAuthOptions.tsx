import { Button, Box, Typography } from "@mui/material";
import React from "react";
import img from "next/image";

// import { useSignInWithGoogle } from "react-firebase-hooks/auth";

// import { auth } from "../../firebase/clientApp";

export const OAuthOptions: React.FC = () => {
  //     const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  return (
    <Box
      display="flex"
      flexDirection="column"
      width="100%"
      mb={4}
      justifyContent="center"
      alignItems="center"
    >
      <Button
        style={{
          textTransform: "none",
          border: "1px solid white",
          color: "white",
          borderRadius: "15px",
          padding: "10px",
          width: "70%",
        }}
        // isLoading={loading}
        // onClick={() => signInWithGoogle()}
      >
        <img
          alt="Google Logo"
          src="https://i.imgur.com/vmMQ8OV.png"
          height="20px"
          style={{ marginRight: "10px" }}
        />
        Continue with Google
      </Button>
      {/* <Typography>{error?.message}</Typography> */}
    </Box>
  );
};
