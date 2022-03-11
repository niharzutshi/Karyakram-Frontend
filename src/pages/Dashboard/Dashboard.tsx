import React from 'react';
import DarkModeToggle from 'react-dark-mode-toggle';
import { useRecoilState } from 'recoil';

import { darkThemeSelectedState } from '@src/store/DarkThemeSelectedState';
import { ExpandableCard } from '@components/ExpandableCard/ExpandableCard';

export const Dasboard = () => {
  const [darkThemeSelected, setDarkThemeSelected] = useRecoilState(darkThemeSelectedState);
  return (
    <div>
      <DarkModeToggle onChange={setDarkThemeSelected} checked={darkThemeSelected} size={80} />
      <ExpandableCard />
    </div>
  );
};
