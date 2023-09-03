import React, { useReducer } from 'react';
import { ThemeContext, themes } from './context';


function reducer(state, action) {
    switch (action.type) {
        case 'switch':
            if (state == themes.light) {
                return themes.dark
            }
            else {
                return themes.light
            }
    }
}

function ThemeProvider({ children }) {
    const [theme, dispatch] = useReducer(reducer, themes.dark)
    return (
        <ThemeContext.Provider value={{ theme, dispatch }}>
            {children}
        </ThemeContext.Provider>
    )
}


export default ThemeProvider;
