import React, { useState } from 'react';
import DarkModeToggle from "react-dark-mode-toggle";
import { useRecoilState } from 'recoil';

import { darkThemeSelectedState } from '@src/store/DarkThemeSelectedState';

export const Dasboard = () => {
    const [darkThemeSelected, setDarkThemeSelected] = useRecoilState(darkThemeSelectedState);
    return(
        <div>
            Dashboard
            <DarkModeToggle
                onChange={setDarkThemeSelected}
                checked={darkThemeSelected}
                size ={80}
            />
        </div>
    )
}
