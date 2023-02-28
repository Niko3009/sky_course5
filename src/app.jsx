import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { userFromStore } from 'back/selectors/userSelector'
import { globalSetUser, globalSetUserToken } from 'back/slices/userSlice'

import { TokenRefreshTimerSelector } from 'app/access/tokenRefresh'

import { AppRoutes } from './app/routes'
import { appThemes } from './app/appThemes'
import { GlobalStyle } from './app/globalStyle'
import { AppStyle as Style } from './app/appStyle'

const App = () => {
    // const dispatch = useDispatch()
    const initUser = { token: null, data: null, id: null }
    const [user, setUser] = useState(initUser)
    const accessСontrol = {
        LogIn: ({ data, token }) => {
            const newUser = { id: data.id, data, token }
            // dispatch(globalSetUser(newUser))
            setUser(newUser)
            const username = data.username
            console.log(time(), `Account (${username}) LOG IN completed`)
        },
        LogOut: () => {
            // dispatch(globalSetUser(initUser))
            setUser(initUser)
            const username = user.data.username
            console.log(time(), `Account (${username}) LOG OUT completed`)
        },
    }

    const [theme, setTheme] = useState(appThemes['dark'])
    const appTheme = {
        current: theme,
        set: (newThemeName) => {
            const newTheme = appThemes[newThemeName]
            if (newTheme) setTheme(newTheme)
        },
    }

    return (
        <appContext.Provider value={{ appTheme, accessСontrol }}>
            <GlobalBox user={user} setUser={setUser} appTheme={appTheme} />
            <GlobalStyle data={appTheme.current} />
        </appContext.Provider>
    )
}

const GlobalBox = ({ user, setUser, appTheme }) => {
    const dispatch = useDispatch()

    const userInApp = user
    const userTokenInApp = userInApp?.token
    const userInStore = useSelector(userFromStore)
    const userTokenInStore = userInStore?.token
    const isGlobalUserRelevant = userInApp?.id === userInStore?.id

    const getRefreshedToken = ({ success, error, data }) => {
        if (success) {
            const newToken = data
            const oldToken = userTokenInStore
            if (newToken?.access !== oldToken?.access) {
                dispatch(globalSetUserToken({ token: newToken }))
                updateTokenInApp(newToken)
                console.log(time(), `Token refresh`)
            }
        } else console.log(time(), `Error (token refresh ): ${error}`)
    }

    const updateTokenInApp = (newToken) => {
        user.token = newToken
        setUser(structuredClone(user))
    }

    useEffect(() => {
        if (!isGlobalUserRelevant) dispatch(globalSetUser(userInApp))
    })

    if (isGlobalUserRelevant)
        return (
            <div className="container">
                <Style data={appTheme.current}>
                    <AppRoutes />
                </Style>

                {userTokenInApp && (
                    <TokenRefreshTimerSelector
                        requestData={userTokenInApp}
                        getResponse={getRefreshedToken}
                    />
                )}
            </div>
        )
    else return
}

const time = () => {
    const Data = new Date()
    const Hour = Data.getHours()
    const Minutes = Data.getMinutes()
    const Seconds = Data.getSeconds()
    return `[${Hour}:${Minutes}:${Seconds}]`
}

const appContext = React.createContext()

export default App
export { appContext }
