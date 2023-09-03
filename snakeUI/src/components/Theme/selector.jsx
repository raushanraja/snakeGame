import React, { useEffect } from 'react'
import { themeChange } from 'theme-change'
const color_themes = ["light", "dark", "cupcake", "bumblebee", "emerald", "corporate", "synthwave", "retro", "cyberpunk", "valentine", "halloween", "garden", "forest", "aqua", "lofi", "pastel", "fantasy", "wireframe", "black", "luxury", "dracula", "cmyk", "autumn", "business", "acid", "lemonade", "night", "coffee", "winter"];

function ThemeSelctor() {

    useEffect(() => {
        themeChange(false)
        // 👆 false parameter is required for react project
    }, [])



    return (
        <select className="select" data-choose-theme>
            <option disabled value="">
                Pick a theme
            </option>
            {color_themes.map((theme) => { return <option key={theme} value={theme}>{theme}</option> })}
        </select>
    )

}


export default ThemeSelctor;
