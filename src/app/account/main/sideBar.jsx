import { SideBarStyle as Style } from './sideBar/sideBarStyle'

import { useContext } from 'react'
import { appThemeContext } from 'app'

import { Link } from 'react-router-dom'

export const SideBar = ({ mode }) => {
    const appTheme = useContext(appThemeContext)

    return (
        <Style data={appTheme.current}>
            <SideBarPersonal />
            {!mode && <SideBarBlock />}
        </Style>
    )
}

const SideBarPersonal = () => {
    return (
        <Link to="/profile/1">
            <div className="sidebar_personal">
                <p className="sidebar_personal_name">Sergey.Ivanov</p>
                <div className="sidebar_personal_avatar"></div>
            </div>
        </Link>
    )
}

const SideBarBlock = () => {
    return (
        <div className="sidebar_list">
            <div>
                <Link to="/main/playlist-of-day/1">
                    <img src="/img/playlist01.png" alt="Playlist Of Day" />
                </Link>
            </div>
            <div>
                <Link to="/main/dance-hits/1">
                    <img src="/img/playlist02.png" alt="Dance Hits" />
                </Link>
            </div>
            <div>
                <Link to="/main/indie-charge/1">
                    <img src="/img/playlist03.png" alt="Indie Сharge" />
                </Link>
            </div>
        </div>
    )
}
