import React, { createContext } from 'react'


export const themes = {
    light: {
        foreground: '#000000',
        background: '#eeeeee',
        mode: 'light'
    },
    dark: {
        foreground: '#ffffff',
        background: '#222222',
        mode: 'dark'
    },
}


export const ThemeContext = createContext({
    theme: themes.dark,
}
);
