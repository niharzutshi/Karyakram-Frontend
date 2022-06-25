import { Button, Input, Typography } from "@mui/material";
import { authModalState } from "../../store/authModalState";
import React, { useState } from "react";
import { useSetRecoilState } from "recoil";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth } from "../../firebase/clientApp";
import { FIREBASE_ERRORS } from "../../firebase/errors";
import { LoadingButton } from "@mui/lab";

const inputStyle = { marginBottom: "20px", width: "100%" };

export const Login: React.FC = () => {
  const setModalState = useSetRecoilState(authModalState);
  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
  });
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  // Firebase logic
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    signInWithEmailAndPassword(loginForm.email, loginForm.password);
    setModalState((prev) => ({
      ...prev,
      open: false,
    }));
  };
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // Update form state
    setLoginForm((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

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
        onChange={onChange}
      />
      <Input
        required
        type="password"
        name="password"
        placeholder="Enter Your Password"
        style={inputStyle}
        onChange={onChange}
      />
      <Typography
        alignItems="center"
        color="red"
        fontSize="10pt"
        style={{ cursor: "default" }}
      >
        {FIREBASE_ERRORS[error?.message as keyof typeof FIREBASE_ERRORS]}
      </Typography>
      {!loading ? (
        <Button
          style={{
            marginTop: "15px",
            borderRadius: "10px",
            textTransform: "none",
            padding: "5px 20px 5px 20px",
            backgroundColor: "#800C83",
            color: "white",
            fontSize: 15,
            marginRight: "15px",
          }}
          type="submit"
        >
          Log In
        </Button>
      ) : (
        <LoadingButton
          style={{
            borderRadius: "10px",
            marginTop: "15px",
            height: "35px",
            width: "90px",
            textTransform: "none",
            padding: "5px 20px 5px 20px",
            backgroundColor: "#800C83",
            color: "white",
            fontSize: 15,
            marginRight: "15px",
          }}
        />
      )}
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
