import React from 'react';
import { useRecoilState } from 'recoil';

import { LandingCard } from '@components/LandingCard/LandingCard';
import { LandingInfo } from '@components/LandingInfo/LandingInfo';

import { userAuthState } from '@src/store/UserAuthState';

import './LandingPage.scss';

export const LandingPage = () => {
  const [userAuthenticated, setUserAuthenticated] = useRecoilState(userAuthState);
  return (
    <div className="landing__container">
      <button
        onClick={() => {
          setUserAuthenticated(!userAuthenticated);
        }}>
        Authenticate
      </button>
      <LandingInfo />
      <LandingCard />
    </div>
  );
};
