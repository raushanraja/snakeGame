import React, { useContext } from 'react';
import { ThemeContext, themes } from './context';


function ThemeToggleButton() {
    const { theme, dispatch } = useContext(ThemeContext);
    console.log('toggle button refreshed')
    return (
        <button
            style={{ background: theme.background, color: theme.foreground }}
            onClick={(theme) => dispatch({ type: 'switch', state: theme })} >
            Change Theme</button >
    )
}


export default ThemeToggleButton;
