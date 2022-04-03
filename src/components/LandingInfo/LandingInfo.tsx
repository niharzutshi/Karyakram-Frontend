import React from 'react';
import { useRecoilState } from 'recoil';

import { userAuthState } from '@src/store/UserAuthState';

import './LandingInfo.scss';

export const LandingInfo = () => {
  const [userAuthenticated, setUserAuthenticated] = useRecoilState(userAuthState);
  return (
    <div className="landing-info__container">
      <div className="landing-info__text">
        Link your Calendar
        <br />
        Check Availability
        <br />
        and
        <br />
        Plan Meetings
      </div>
      <button className="landing-info__button" onClick={() => {
          setUserAuthenticated(!userAuthenticated);
        }}>Get Started</button>
      <img
        src="https://i.imgur.com/YuUnLZS.png"
        alt="astronaut2"
        className="landing-info__astronaut"
      />
    </div>
  );
};
