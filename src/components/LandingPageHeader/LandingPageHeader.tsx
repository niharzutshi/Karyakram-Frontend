import { AuthModal } from "../AuthModal/AuthModal";
import { authModalState } from "../../store/authModalState";
import React from "react";
import Link from "next/link";
import { useRecoilValue, useSetRecoilState } from "recoil";

export const LandingPageHeader = () => {
  const setAuthModalState = useSetRecoilState(authModalState);
  const modalState = useRecoilValue(authModalState);

  return (
    <>
      <AuthModal />
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "20px 50px 10px 20px",
        }}
      >
        <Link href="/">
          <img
            src="https://i.imgur.com/HbgpwLa.png"
            alt="Karyakram Logo"
            style={{
              height: "35px",
              width: "220px",
            }}
          />
        </Link>
        <Link
          href="/"
          style={{
            fontWeight: "bold",
            fontSize: "20px",
            textDecoration: "none",
            color: "white",
          }}
        >
          Home
        </Link>
        <Link
          href="/trending"
          style={{
            fontWeight: "bold",
            fontSize: "20px",
            color: "#af9de0",
            textDecoration: "none",
          }}
        >
          Discover
        </Link>
        <Link
          href="/about"
          style={{
            fontWeight: "bold",
            fontSize: "20px",
            color: "#af9de0",
            textDecoration: "none",
          }}
        >
          About
        </Link>
        <button
          style={{
            color: "white",
            margin: "-20px 0 0 0",
            lineHeight: "25px",
            fontSize: "15px",
            fontWeight: "bold",
            padding: "5px 20px 10px 20px",
            backgroundColor: "#5b3f7f",
            border: "none",
            borderRadius: "0 0 12px 12px",
          }}
          onClick={() => {
            setAuthModalState({ open: true, view: "crypto" });
          }}
        >
          Connect <br /> Wallet
        </button>
        <button
          style={{
            color: "white",
            margin: "-20px 0 0 -180px",
            lineHeight: "25px",
            fontSize: "15px",
            fontWeight: "bold",
            padding: "5px 20px 10px 20px",
            backgroundColor: "#5b3f7f",
            border: "none",
            borderRadius: "0 0 12px 12px",
          }}
          onClick={() => {
            setAuthModalState({ open: true, view: "login" });
          }}
        >
          Login
        </button>
      </div>
    </>
  );
};
