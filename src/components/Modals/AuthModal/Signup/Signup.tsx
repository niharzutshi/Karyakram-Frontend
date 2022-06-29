import { Button, Input, Typography } from "@mui/material";
import { authModalState } from "../../../../store/authModalState";
import React, { useState } from "react";
import { useSetRecoilState } from "recoil";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth } from "../../../../firebase/clientApp";
import { FIREBASE_ERRORS } from "../../../../firebase/errors";
import { LoadingButton } from "@mui/lab";

export const Signup: React.FC = () => {
  const setModalState = useSetRecoilState(authModalState);
  const [signUpForm, setSignUpForm] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");

  const [createUserWithEmailAndPassword, user, loading, userError] =
    useCreateUserWithEmailAndPassword(auth);
  // Firebase logic
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (error) setError("");
    if (signUpForm.password !== signUpForm.confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    createUserWithEmailAndPassword(signUpForm.email, signUpForm.password);
  };
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // Update form state
    setSignUpForm((prev) => ({
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
        onChange={onChange}
        style={{ marginBottom: "20px", width: "100%" }}
      />
      <Input
        required
        type="password"
        name="password"
        placeholder="Enter Your Password"
        style={{ marginBottom: "20px", width: "100%" }}
        onChange={onChange}
      />
      <Input
        required
        type="password"
        name="confirmPassword"
        placeholder="Confirm Your Password"
        style={{ marginBottom: "5px", width: "100%" }}
        onChange={onChange}
      />
      <Typography
        alignItems="center"
        color="red"
        fontSize="10pt"
        style={{ cursor: "default" }}
      >
        {error ||
          FIREBASE_ERRORS[userError?.message as keyof typeof FIREBASE_ERRORS]}
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
          Sign Up
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
          marginTop: "20px",
          textAlign: "center",
        }}
      >
        Already a Karyakram Member?{" "}
        <Typography
          style={{ color: "#AF9DE0", cursor: "pointer" }}
          onClick={() => {
            setModalState((prev) => ({
              ...prev,
              view: "login",
            }));
          }}
        >
          Click here to Log In!
        </Typography>
      </Typography>
    </form>
  );
};
