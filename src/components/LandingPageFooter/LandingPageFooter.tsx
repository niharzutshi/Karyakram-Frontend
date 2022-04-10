import React from 'react';

import './LandingPageFooter.scss';

export const LandingPageFooter = () => {
    return (
        <div className="landing-page-footer__container">
            <span className="landing-page-footer__option">Support</span>
            <span className="landing-page-footer__separator">|</span>
            <span className="landing-page-footer__option">Privacy and Policy</span>
            <span className="landing-page-footer__separator">|</span>
            <span className="landing-page-footer__option">Terms of Use</span>
            <span className="landing-page-footer__separator">|</span>
            <span className="landing-page-footer__option">Cookie Policy</span>
        </div>
    )
}
