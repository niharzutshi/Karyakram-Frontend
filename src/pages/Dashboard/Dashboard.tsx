import React from 'react';
import DarkModeToggle from 'react-dark-mode-toggle';
import { useRecoilState } from 'recoil';

import { darkThemeSelectedState } from '@src/store/DarkThemeSelectedState';
import { userAuthState } from '@src/store/UserAuthState';

import { ExpandableCard } from '@components/ExpandableCard/ExpandableCard';
import { SearchBar } from '@components/SearchBar/SearchBar';

export const Dasboard = () => {
  const [darkThemeSelected, setDarkThemeSelected] = useRecoilState(darkThemeSelectedState);
  const [userAuthenticated, setUserAuthenticated] = useRecoilState(userAuthState);
  return (
    <div>
      <button
        onClick={() => {
          setUserAuthenticated(!userAuthenticated);
        }}>
        Authenticate
      </button>
      <DarkModeToggle onChange={setDarkThemeSelected} checked={darkThemeSelected} size={80} />
      <ExpandableCard />
      <SearchBar />
    </div>
  );
};
