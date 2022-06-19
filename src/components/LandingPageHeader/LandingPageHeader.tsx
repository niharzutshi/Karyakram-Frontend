import { AuthModal } from "../AuthModal/AuthModal";
import { authModalState } from "../../store/authModalState";
import React from "react";
import Link from "next/link";
import { useRecoilValue, useSetRecoilState } from "recoil";

import "./LandingPageHeader.module.scss";

export const LandingPageHeader = () => {
  const setAuthModalState = useSetRecoilState(authModalState);
  const modalState = useRecoilValue(authModalState);

  return (
    <>
      <AuthModal />
      <div className="landing-page-header__container">
        <Link href="/">
          <img
            src="https://i.imgur.com/HbgpwLa.png"
            alt="Karyakram Logo"
            className="landing-page-header__logo"
          />
        </Link>
        <Link href="/" className="landing-page-header__option-active">
          Home
        </Link>
        <Link href="/trending" className="landing-page-header__option">
          Discover
        </Link>
        <Link href="/about" className="landing-page-header__option">
          About
        </Link>
        <button
          className="head-button"
          onClick={() => {
            setAuthModalState({ open: true, view: "crypto" });
          }}
        >
          Connect <br /> Wallet
        </button>
        <button
          className="landing-page-header__login-button"
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
