import React from 'react';
import DarkModeToggle from 'react-dark-mode-toggle';
import { useRecoilState } from 'recoil';
import { useNavigate } from 'react-router-dom';

import { darkThemeSelectedState } from '@src/store/DarkThemeSelectedState';

export const Home = () => {
  const [darkThemeSelected, setDarkThemeSelected] = useRecoilState(darkThemeSelectedState);
  const navigate = useNavigate();

  return (
    <div>
      Landing Page
      <DarkModeToggle onChange={setDarkThemeSelected} checked={darkThemeSelected} size={80} />
      <button onClick={() => navigate('/dashboard')}>Go to dashboard</button>
    </div>
  );
};
