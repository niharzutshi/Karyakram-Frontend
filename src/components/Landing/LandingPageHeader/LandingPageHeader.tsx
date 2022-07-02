import { AuthModal } from "../../Modals/AuthModal/AuthModal";
import { authModalState } from "../../../store/authModalState";
import React from "react";
import Link from "next/link";
import { useRecoilValue, useSetRecoilState } from "recoil";
import Image from "next/image";

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
          <Image
            src="https://i.imgur.com/HbgpwLa.png"
            alt="Karyakram Logo"
            style={{
              height: "35px",
              width: "220px",
            }}
          />
        </Link>
        <Link href="/">
          <span
            style={{
              fontWeight: "bold",
              fontSize: "20px",
              textDecoration: "none",
              color: "white",
              cursor: "pointer",
            }}
          >
            Home
          </span>
        </Link>
        <Link href="/trending">
          <span
            style={{
              fontWeight: "bold",
              fontSize: "20px",
              textDecoration: "none",
              color: "white",
              cursor: "pointer",
            }}
          >
            Discover
          </span>
        </Link>
        <Link href="/">
          <span
            style={{
              fontWeight: "bold",
              fontSize: "20px",
              textDecoration: "none",
              color: "white",
              cursor: "pointer",
            }}
          >
            About
          </span>
        </Link>
        <button
          style={{
            color: "white",
            margin: "-20px 0 0 0",
            lineHeight: "25px",
            fontSize: "15px",
            fontWeight: "bold",
            padding: "5px 20px 10px 20px",
            backgroundColor: "#472C83",
            border: "none",
            borderRadius: "0 0 12px 12px",
            cursor: "pointer",
            width: "100px",
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
            backgroundColor: "#472C83",
            border: "none",
            borderRadius: "0 0 12px 12px",
            cursor: "pointer",
            width: "100px",
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
