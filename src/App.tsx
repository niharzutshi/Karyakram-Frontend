import React from 'react';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useRecoilValue } from 'recoil';

import { Dasboard } from '@pages/Dashboard/Dashboard';
import { Home } from '@pages/Home/Home';
import { Trending } from '@pages/Trending/Trending';
import { Event } from '@pages/Event/Event';
import { Calendar } from '@pages/Calendar/Calendar';
import { User } from '@pages/User/User';
import { Notifications } from '@pages/Notifications/Notifications';

import { Sidebar } from '@components/Sidebar/Sidebar';

import { darkThemeSelectedState } from './store/DarkThemeSelectedState';
import { darkTheme, lightTheme } from './theme';

import AstroPlanet from './assets/images/astronaut+planet.png';

import './App.scss';

export const App = () => {
  const darkThemeSelected = useRecoilValue(darkThemeSelectedState);
  return (
    <ThemeProvider theme={darkThemeSelected ? darkTheme : lightTheme}>
      <CssBaseline />
      <Router>
        <div
          className="App"
          style={{
            display: 'flex'
          }}>
          <Sidebar />
          <div className="main-area">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/dashboard" element={<Dasboard />} />
              <Route path="/trending" element={<Trending />} />
              <Route path="/event" element={<Event />} />
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/user" element={<User />} />
              <Route path="/notifications" element={<Notifications />} />
            </Routes>
          </div>
        </div>
        <img src={AstroPlanet} alt="astronaut on planet" className="astro-planet" />
      </Router>
    </ThemeProvider>
  );
};
