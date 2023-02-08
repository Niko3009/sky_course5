import { GlobalStyle } from './app/globalStyle'
import { AppStyle as Style } from './app/appStyle'
import { appThemes, appThemeContext } from './app/appThemes'

import { useState } from 'react'

import { AppRoutes } from './app/routes'
import { useNavigate } from 'react-router-dom'

const App = () => {
    const navigate = useNavigate()

    // const [user, setUser] = useState(null)

    const [theme, setTheme] = useState(appThemes['dark'])
    const setNewTheme = (themeName) => {
        if (appThemes[themeName]) {
            setTheme(appThemes[themeName])
        } else console.log(`Тема ${themeName} не найдена`)
    }
    const appTheme = { current: theme, set: setNewTheme }

    const userAccessСontrol = {
        LogIn: () => {
            // setUser({ login: login })
            localStorage.setItem('token', '1234')
            navigate('/main', { replace: true })
        },
        LogOut: () => {
            // setUser(null)
            localStorage.clear()
            navigate('/', { replace: true })
        },
    }

    return (
        <div className="container">
            <appThemeContext.Provider value={appTheme}>
                <GlobalStyle data={appTheme.current} />

                <Style data={appTheme.current}>
                    <AppRoutes
                        user={localStorage.getItem('token')}
                        userAccessСontrol={userAccessСontrol}
                    />
                </Style>
            </appThemeContext.Provider>
        </div>
    )
}

export default App
export { appThemeContext }
