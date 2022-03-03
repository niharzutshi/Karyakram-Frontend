import React from 'react';
import { CssBaseline, ThemeProvider } from "@mui/material";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { darkTheme } from '@src/theme';
import { Dasboard } from '@pages/Dashboard/Dashboard';
import { Home } from '@pages/Home/Home';


export const App = () => {
    return (
        <ThemeProvider theme={darkTheme}>
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
