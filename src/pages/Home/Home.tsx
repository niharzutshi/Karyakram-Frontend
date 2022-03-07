import React from 'react';
import DarkModeToggle from 'react-dark-mode-toggle';
import { useRecoilState } from 'recoil';

import { darkThemeSelectedState } from '@src/store/DarkThemeSelectedState';

export const Home = () => {
  const [darkThemeSelected, setDarkThemeSelected] = useRecoilState(darkThemeSelectedState);
  return (
    <div>
      Landing Page
      <DarkModeToggle onChange={setDarkThemeSelected} checked={darkThemeSelected} size={80} />
    </div>
  );
};
