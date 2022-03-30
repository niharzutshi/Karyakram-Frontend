import React from 'react';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useRecoilValue } from 'recoil';

import { Dasboard } from '@pages/Dashboard/Dashboard';
import { LandingPage } from '@pages/LandingPage/LandingPage';
import { Trending } from '@pages/Trending/Trending';
import { Event } from '@pages/Event/Event';
import { Calendar } from '@pages/Calendar/Calendar';
import { User } from '@pages/User/User';
import { Notifications } from '@pages/Notifications/Notifications';

import { Sidebar } from '@components/Sidebar/Sidebar';

import { darkThemeSelectedState } from './store/DarkThemeSelectedState';
import { userAuthState } from './store/UserAuthState';

import { darkTheme, lightTheme } from './theme';

import './App.scss';

export const App = () => {
  const darkThemeSelected = useRecoilValue(darkThemeSelectedState);
  const userAuthenticated = useRecoilValue(userAuthState);
  return (
    <ThemeProvider theme={darkThemeSelected ? darkTheme : lightTheme}>
      <CssBaseline />
      <Router>
        <div className="App">
          {!userAuthenticated ? <Sidebar /> : ''}
          <div className="main-area">
            <Routes>
              {userAuthenticated ? (
                <Route path="/" element={<LandingPage />} />
              ) : (
                <Route path="/" element={<Dasboard />} />
              )}
              <Route path="/trending" element={<Trending />} />
              <Route path="/event" element={<Event />} />
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/user" element={<User />} />
              <Route path="/notifications" element={<Notifications />} />
            </Routes>
          </div>
        </div>
        <img
          src="https://i.imgur.com/ZBvrLmY.png"
          alt="astronaut on planet"
          className="astro-planet"
        />
      </Router>
    </ThemeProvider>
  );
};
