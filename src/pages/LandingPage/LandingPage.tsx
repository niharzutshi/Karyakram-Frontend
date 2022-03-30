import React from 'react';

import { LandingCard } from '@components/LandingCard/LandingCard';
import { LandingInfo } from '@components/LandingInfo/LandingInfo';

import './LandingPage.scss';

export const LandingPage = () => {
  return (
    <div className="landing__container">
      <LandingInfo />
      <LandingCard />
    </div>
  );
};
