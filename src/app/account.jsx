import { AccountStyle as Style } from './account/accountStyle'

import { Main } from './account/main'
import { Bar } from './account/bar'

export const Account = ({ LogOut }) => {
    return (
        <Style>
            <Main LogOut={LogOut} />
            <Bar />
        </Style>
    )
}
