import { AccountStyle as Style } from './account/accountStyle'

import { Main } from './account/main'
import { PlayerBar } from './account/playerBar'

export const Account = ({ LogOut }) => {
    return (
        <Style>
            <Main LogOut={LogOut} />
            <PlayerBar />
        </Style>
    )
}
