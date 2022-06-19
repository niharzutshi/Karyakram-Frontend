import { Box, Button, Input, Typography } from "@mui/material";
import { authModalState } from "@src/store/authModalState";
import React from "react";
import { useRecoilState } from "recoil";

const inputStyle = { marginBottom: "20px", width: "100%" };

export const Login: React.FC = () => {
  const [modalState, setModalState] = useRecoilState(authModalState);
  const onSubmit = () => {};
  return (
    <form
      onSubmit={onSubmit}
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Input
        required
        type="email"
        name="email"
        placeholder="Enter Your Email"
        style={inputStyle}
      />
      <Input
        required
        type="password"
        name="password"
        placeholder="Enter Your Password"
        style={inputStyle}
      />
      <Button
        style={{
          borderRadius: "10px",
          textTransform: "none",
          padding: "5px 20px 5px 20px",
          backgroundColor: "#800C83",
          color: "white",
          fontSize: 15,
          marginRight: "15px",
        }}
      >
        Log In
      </Button>
      <Typography
        style={{
          marginTop: "10px",
          textAlign: "center",
          fontSize: 12,
        }}
      >
        Forgot password?{" "}
        <span
          style={{ color: "#AF9DE0", cursor: "pointer" }}
          onClick={() => {
            setModalState((prev) => ({
              ...prev,
              view: "resetPassword",
            }));
          }}
        >
          Reset
        </span>
      </Typography>
      <Typography
        style={{
          marginTop: "20px",
          textAlign: "center",
        }}
      >
        New to Karyakram?{" "}
        <Typography
          style={{ color: "#AF9DE0", cursor: "pointer" }}
          onClick={() => {
            setModalState((prev) => ({
              ...prev,
              view: "signup",
            }));
          }}
        >
          Click here to Sign Up!
        </Typography>
      </Typography>
    </form>
  );
};
