import React from 'react';
import { CssBaseline, ThemeProvider } from "@mui/material";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useRecoilValue } from 'recoil';

import { Dasboard } from '@pages/Dashboard/Dashboard';
import { Home } from '@pages/Home/Home';
import { darkThemeSelectedState } from './store/DarkThemeSelectedState';
import { darkTheme, lightTheme } from './theme';

export const App = () => {
    const darkThemeSelected = useRecoilValue(darkThemeSelectedState);
    return (
        <ThemeProvider theme = { darkThemeSelected ? darkTheme : lightTheme } >
            <CssBaseline />
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/Dasboard" element={<Dasboard />} />
                </Routes>
            </Router>
        </ThemeProvider>
    );
};