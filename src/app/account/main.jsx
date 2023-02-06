import { MainStyle as Style } from './main/mainStyle'

import { Nav } from './main/nav'
import { MainRoutes } from './main/routes'

export const Main = ({ LogOut }) => {
    return (
        <Style>
            <Nav LogOut={LogOut} />
            <MainRoutes />
        </Style>
    )
}
