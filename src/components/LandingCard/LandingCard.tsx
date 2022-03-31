import React from 'react';

import './LandingCard.scss';

export const LandingCard = () => {
  return (
    <div className="landing-card__container">
      <div className="landing-card__picture-container">
        <img
          className="landing-card__picture"
          src="https://i.imgur.com/iqukoXx.png"
          alt="trending-image"
        />
      </div>
      <div className="landing-card__price">
        0.1 <br /> ETH
      </div>
      <div className="landing-card__details">
        West End London Conference <br /> -xyz abc
        <br />
        <button className="landing-card__button">Register Now</button>
      </div>
    </div>
  );
};
