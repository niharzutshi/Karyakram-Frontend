import React from 'react';
import DarkModeToggle from 'react-dark-mode-toggle';
import { useRecoilState } from 'recoil';

import { darkThemeSelectedState } from '@src/store/DarkThemeSelectedState';
import { Sidebar } from '@components/Sidebar/Sidebar';

export const Dasboard = () => {
  const [darkThemeSelected, setDarkThemeSelected] = useRecoilState(darkThemeSelectedState);
  return (
    <div>
      <Sidebar collapsed={true} rtl={false} />
      <DarkModeToggle onChange={setDarkThemeSelected} checked={darkThemeSelected} size={80} />
    </div>
  );
};
