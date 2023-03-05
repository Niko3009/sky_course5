import { render } from '@testing-library/react'
import { useState } from 'react'

import { appContext } from 'app'
import { appThemes } from 'app/appThemes'

const AllProviders = ({ children }) => {
    const [theme, setTheme] = useState(appThemes['dark'])
    const appTheme = {
        current: theme,
        set: (nonStandartThemeName = null) => {
            let newThemeName = theme.name === 'dark' ? 'light' : 'dark'
            if (nonStandartThemeName) newThemeName = nonStandartThemeName
            const newTheme = appThemes[newThemeName]
            if (newTheme) setTheme(newTheme)
        },
    }

    const accessСontrol = {
        LogIn: () => {},
        LogOut: () => {},
    }

    return (
        <appContext.Provider value={{ appTheme, accessСontrol }}>
            {children}
        </appContext.Provider>
    )
}
export const customRender = (ui, options) =>
    render(ui, { wrapper: AllProviders, ...options })
