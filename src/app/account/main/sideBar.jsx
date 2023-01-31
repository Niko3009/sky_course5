import { SideBarStyle as Style } from './sideBar/sideBarStyle'

const SideBarPersonal = () => {
    return (
        <div className="sidebar__personal">
            <p className="sidebar__personal-name">Sergey.Ivanov</p>
            <div className="sidebar__avatar"></div>
        </div>
    )
}

const SideBarBlock = (props) => {
    return (
        <div className="sidebar__block">
            <div className="sidebar__list">
                <div
                    onClick={() => {
                        props.changeSection('PlaylistOfDay')
                    }}
                    className="sidebar__item"
                >
                    <a className="sidebar__link">
                        <img
                            className="sidebar__img"
                            src="img/playlist01.png"
                            alt="Playlist Of Day"
                        />
                    </a>
                </div>
                <div
                    onClick={() => {
                        props.changeSection('DanceHits')
                    }}
                    className="sidebar__item"
                >
                    <a className="sidebar__link">
                        <img
                            className="sidebar__img"
                            src="img/playlist02.png"
                            alt="Dance Hits"
                        />
                    </a>
                </div>
                <div
                    onClick={() => {
                        props.changeSection('IndieСharge')
                    }}
                    className="sidebar__item"
                >
                    <a className="sidebar__link">
                        <img
                            className="sidebar__img"
                            src="img/playlist03.png"
                            alt="Indie Сharge"
                        />
                    </a>
                </div>
            </div>
        </div>
    )
}

export const SideBar = (props) => {
    return (
        <Style>
            <SideBarPersonal />
            <SideBarBlock changeSection={props.changeSection} />
        </Style>
    )
}
