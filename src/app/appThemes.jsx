import React from 'react'

export const appThemeContext = React.createContext()

export const appThemes = {
    dark: {
        name: 'dark',
        colorBasic: '#181818',
        colorN1: '#ffffff',
        colorN2: '#1C1C1C',
        colorN3: '#2e2e2e',
    },
    light: {
        name: 'light',
        colorBasic: '#ffffff',
        colorN1: '#181818',
        colorN2: '#f6f5f3',
        colorN3: '#d9d9d9;',
    },
}
