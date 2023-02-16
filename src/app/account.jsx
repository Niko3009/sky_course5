import { AccountStyle as Style } from './account/accountStyle'

import React from 'react'
import { useContext, useState } from 'react'

import { appContext } from 'app'

import { Main } from './account/main'
import { PlayerBar } from './account/playerBar'

const userContext = React.createContext()

export const Account = () => {
    const appTheme = useContext(appContext).appTheme

    const [accState, setAccState] = useState({ track: null })
    const changeAccState = (newAccState) => {
        setAccState(newAccState)
    }

    const changeTrack = function (track) {
        accState.track = track
        changeAccState(accState)
    }

    const account = {
        state: accState,
        changeTrack: changeTrack,
    }

    return (
        <userContext.Provider value={{ account }}>
            <Style data={appTheme.current}>
                <Main mode={accState.mode} />
                <PlayerBar />
            </Style>
        </userContext.Provider>
    )
}

export { userContext }
