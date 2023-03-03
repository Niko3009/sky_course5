import React, { useContext } from 'react'
import { useDispatch } from 'react-redux'

import { setPlayTrack } from 'back/slices/accountSlice'
import { appContext } from 'app'

import { Main } from './account/main'
import { Player } from './account/player'
import { AccountStyle as Style } from './account/accountStyle'

const userContext = React.createContext()

export const Account = () => {
    const dispatch = useDispatch()
    const appTheme = useContext(appContext).appTheme

    const changeTrack = (track) => {
        dispatch(setPlayTrack({ track }))
    }

    const account = { changeTrack }

    return (
        <userContext.Provider value={{ account }}>
            <Style data={appTheme.current}>
                <Main />
                <Player />
            </Style>
        </userContext.Provider>
    )
}

export { userContext }
