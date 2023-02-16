import { GlobalStyle } from './app/globalStyle'
import { AppStyle as Style } from './app/appStyle'
import { appThemes } from './app/appThemes'

import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

// import { TokenRequestSelector } from 'app/access/tokenRequest'
import { AppRoutes } from './app/routes'

const appContext = React.createContext()

const App = () => {
    const navigate = useNavigate()

    const [theme, setTheme] = useState(appThemes['dark'])
    const appTheme = {
        current: theme,
        set: (themeName) => {
            if (appThemes[themeName]) {
                setTheme(appThemes[themeName])
            } else console.log(`Тема ${themeName} не найдена`)
        },
    }

    const [user, setUser] = useState({ data: null, token: null })
    const accessСontrol = {
        LogIn: (newUser) => {
            const isTokenChange = user.token?.access !== newUser.token?.access
            if (isTokenChange) accessСontrol.changeUser(newUser)
            navigate(`/main/${newUser.data.id}/`, {
                replace: true,
            })
        },
        LogOut: () => {
            user.data = null
            user.token = null
            user.id = null
            accessСontrol.changeUser(user)
            navigate('/', { replace: true })
        },
        changeUser: (newUser) => {
            setUser({
                data: newUser.data,
                token: newUser.token,
                id: newUser.id,
            })
        },
    }

    return (
        <div className="container">
            <appContext.Provider value={{ appTheme, accessСontrol, user }}>
                <GlobalStyle data={appTheme.current} />

                <Style data={appTheme.current}>
                    <AppRoutes />
                </Style>
            </appContext.Provider>
        </div>
    )
}

export default App
export { appContext }
