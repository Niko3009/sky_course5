import { AccountStyle as Style } from './account/accountStyle'

import { useContext } from 'react'
import { appThemeContext } from 'app'

import { Main } from './account/main'
import { PlayerBar } from './account/playerBar'

export const Account = ({ LogOut }) => {
    const appTheme = useContext(appThemeContext)

    return (
        <Style data={appTheme.current}>
            <Main LogOut={LogOut} />
            <PlayerBar />
        </Style>
    )
}
