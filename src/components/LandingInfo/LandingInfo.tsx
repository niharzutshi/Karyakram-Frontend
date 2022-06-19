import React from "react";
import { useRecoilState } from "recoil";

import { userAuthState } from "../../store/userAuthState";

export const LandingInfo = () => {
  const [userAuthenticated, setUserAuthenticated] =
    useRecoilState(userAuthState);
  return (
    <div
      style={{
        padding: "20px",
        borderRadius: "20px",
        backgroundImage: 'url("https://i.imgur.com/uzRn7vO.png")',
        backgroundSize: "contain",
        height: "500px",
        width: "500px",
        display: "block",
      }}
    >
      <div
        style={{
          cursor: "default",
          padding: "90px 0 0 20px",
          fontWeight: "bold",
          fontSize: "25px",
        }}
      >
        Link your Calendar
        <br />
        Check Availability
        <br />
        and
        <br />
        Plan Meetings
      </div>
      <button
        style={{
          color: "#49169c",
          margin: "80px 0 0 20px",
          borderRadius: "17px",
          fontWeight: "bolder",
          fontSize: "18px",
          border: "none",
          backgroundColor: "white",
          padding: "10px 30px 10px 30px",
          cursor: "pointer",
        }}
        onClick={() => {
          setUserAuthenticated(!userAuthenticated);
        }}
      >
        Get Started
      </button>
      <img
        src="https://i.imgur.com/YuUnLZS.png"
        alt="astronaut2"
        style={{
          float: "right",
          height: "200px",
          width: "220px",
          margin: "-100px 0 0 20px",
        }}
      />
    </div>
  );
};
