import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

import { userFromStore } from 'back/selectors/userSelector'
import { appContext } from 'app'

import { SideBarStyle as Style } from './sideBar/sideBarStyle'

export const SideBar = ({ mode }) => {
    const appTheme = useContext(appContext).appTheme
    const user = useSelector(userFromStore)
    const userData = user.data
    const id = user.id

    return (
        <Style data={appTheme.current}>
            <SideBarPersonal userData={userData} />
            {mode === null && <SideBarBlock id={id} />}
        </Style>
    )
}

const SideBarPersonal = ({ userData }) => {
    return (
        <div className="sidebar_personal">
            <p className="sidebar_personal_name">{userData.username}</p>
            <div className="sidebar_personal_avatar"></div>
        </div>
    )
}

const SideBarBlock = ({ id }) => {
    return (
        <div className="sidebar_list">
            <div>
                <Link to={`/main/${id}/playlist-of-day/`}>
                    <img src="/img/playlist01.png" alt="Playlist Of Day" />
                </Link>
            </div>
            <div>
                <Link to={`/main/${id}/dance-hits/`}>
                    <img src="/img/playlist02.png" alt="Dance Hits" />
                </Link>
            </div>
            <div>
                <Link to={`/main/${id}/indie-charge/`}>
                    <img src="/img/playlist03.png" alt="Indie Сharge" />
                </Link>
            </div>
        </div>
    )
}
