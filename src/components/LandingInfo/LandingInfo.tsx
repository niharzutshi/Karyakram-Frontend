import React from "react";
import { useSetRecoilState } from "recoil";

import { authModalState } from "../../store/authModalState";

export const LandingInfo = () => {
  const setModalState = useSetRecoilState(authModalState);
  return (
    <div
      style={{
        padding: "20px",
        borderRadius: "20px",
        backgroundImage: 'url("https://i.imgur.com/uzRn7vO.png")',
        backgroundSize: "contain",
        height: "500px",
        width: "600px",
        display: "block",
      }}
    >
      <div
        style={{
          cursor: "default",
          padding: "50px 0 0 20px",
          fontWeight: "bold",
          fontSize: "30px",
        }}
      >
        Link your Calendar
        <br />
        <span style={{ color: "#CE6432" }}>Check Availability</span>
        <br />
        and
        <br />
        <span style={{ color: "#D53A7A" }}>Plan Meetings</span>
      </div>
      <button
        style={{
          color: "#49169c",
          margin: "40px 0 0 20px",
          borderRadius: "17px",
          fontWeight: "bolder",
          fontSize: "20px",
          border: "none",
          backgroundColor: "white",
          padding: "15px 30px 15px 30px",
          cursor: "pointer",
          width: "220px",
        }}
        onClick={() => {
          setModalState({ open: true, view: "signup" });
        }}
      >
        Get Started
      </button>
      <img
        src="https://i.imgur.com/YuUnLZS.png"
        alt="astronaut2"
        style={{
          float: "right",
          height: "270px",
          width: "290px",
          marginTop: "-30px",
        }}
      />
    </div>
  );
};
