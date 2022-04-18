import React from 'react';
import { Link } from 'react-router-dom';

import './LandingPageHeader.scss';

export const LandingPageHeader = () => {
    return (
        <div className="landing-page-header__container">
            <Link to="/"><img src="https://i.imgur.com/HbgpwLa.png" alt="Karyakram Logo" className="landing-page-header__logo" /></Link>
            <Link to="/" className="landing-page-header__option-active">Home</Link>
            <Link to="/trending" className="landing-page-header__option">Discover</Link>
            <Link to="/about" className="landing-page-header__option">About</Link>
            <button className="landing-page-header__button">Connect <br /> Wallet</button>
            <button className="landing-page-header__login-button">Login</button>
        </div>
    )
}
