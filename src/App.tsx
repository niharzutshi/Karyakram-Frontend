import React from 'react';
import { CssBaseline, ThemeProvider } from "@mui/material";

import { darkTheme } from '@src/theme';

export const App = () => {
    return (
        <ThemeProvider theme={darkTheme}>
            <CssBaseline />
            <div>
                <p>Hello World</p>
            </div>
        </ThemeProvider>
    );
};
