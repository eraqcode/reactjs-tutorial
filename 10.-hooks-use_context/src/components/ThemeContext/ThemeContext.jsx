import React from 'react'

export const themes = {
    light: {
        background: "white",
        color: "black",
        width: '100%'
    },
    dark: {
        background: "black",
        color: "white",
        width: '100%'
    }
}

// Creacion de Context

export const ThemeContext = React.createContext( themes.light );
