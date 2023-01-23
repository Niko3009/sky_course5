export const Logo = () => {
    return (
        <div className="nav__logo logo">
            <img className="logo__image" src="./img/logo.png" alt="logo" />
        </div>
    )
}

export const BurgerMenuSpan = () => {
    return (
        <div className="nav__burger burger">
            <span className="burger__line"></span>
            <span className="burger__line"></span>
            <span className="burger__line"></span>
        </div>
    )
}

export const BurgerMenu = () => {
    return (
        <div className="nav__menu menu">
            <ul className="menu__list">
                <li className="menu__item">
                    <a href="http://" className="menu__link">
                        Главное
                    </a>
                </li>
                <li className="menu__item">
                    <a href="http://" className="menu__link">
                        Мой плейлист
                    </a>
                </li>
                <li className="menu__item">
                    <a href="http://" className="menu__link">
                        Войти
                    </a>
                </li>
            </ul>
        </div>
    )
}

export const Search = () => {
    return (
        <div className="centerblock__search search">
            <svg className="search__svg">
                <use xlinkHref="img/icon/sprite.svg#icon-search"></use>
            </svg>
            <input
                className="search__text"
                type="search"
                placeholder="Поиск"
                name="search"
            />
        </div>
    )
}

export const SearchBreadcrumbs = () => {
    return (
        <div className="centerblock__filter filter">
            <div className="filter__title">Искать по:</div>
            <div className="filter__button button-author _btn-text">
                исполнителю
            </div>
            <div className="filter__button button-year _btn-text">
                году выпуска
            </div>
            <div className="filter__button button-genre _btn-text">жанру</div>
        </div>
    )
}

export const ContentBreadcrumbs = () => {
    return (
        <div className="content__title playlist-title">
            <div className="playlist-title__col col01">Трек</div>
            <div className="playlist-title__col col02">ИСПОЛНИТЕЛЬ</div>
            <div className="playlist-title__col col03">АЛЬБОМ</div>
            <div className="playlist-title__col col04">
                <svg className="playlist-title__svg" alt="time">
                    <use xlinkHref="img/icon/sprite.svg#icon-watch"></use>
                </svg>
            </div>
        </div>
    )
}

export const SideBarPersonal = () => {
    return (
        <div className="sidebar__personal">
            <p className="sidebar__personal-name">Sergey.Ivanov</p>
            <div className="sidebar__avatar"></div>
        </div>
    )
}

export const SideBarBlock = () => {
    return (
        <div className="sidebar__block">
            <div className="sidebar__list">
                <div className="sidebar__item">
                    <a className="sidebar__link" href="#">
                        <img
                            className="sidebar__img"
                            src="img/playlist01.png"
                            alt="day's playlist"
                        />
                    </a>
                </div>
                <div className="sidebar__item">
                    <a className="sidebar__link" href="#">
                        <img
                            className="sidebar__img"
                            src="img/playlist02.png"
                            alt="day's playlist"
                        />
                    </a>
                </div>
                <div className="sidebar__item">
                    <a className="sidebar__link" href="#">
                        <img
                            className="sidebar__img"
                            src="img/playlist03.png"
                            alt="day's playlist"
                        />
                    </a>
                </div>
            </div>
        </div>
    )
}

export const Playlist = (props) => {
    const tracks = props.tracks

    let trackBlockList = []
    Object.keys(tracks).forEach((key) =>
        trackBlockList.push(<PlaylistItem trackData={tracks[key]} />)
    )

    return <div className="content__playlist playlist"> {trackBlockList} </div>
}

export const PlaylistItem = (properties) => {
    const props = properties.trackData

    return (
        <div className="playlist__item">
            <div className="playlist__track track">
                <div className="track__title">
                    <div className="track__title-image">
                        <svg className="track__title-svg" alt="music">
                            <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                        </svg>
                    </div>
                    <div className="track__title-text">
                        <a className="track__title-link" href="#">
                            {props.title}{' '}
                            <span className="track__title-span">
                                {props.titleSpan}
                            </span>
                        </a>
                    </div>
                </div>

                <div className="track__author">
                    <a className="track__author-link" href="#">
                        {props.author}
                    </a>
                </div>

                <div className="track__album">
                    <a className="track__album-link" href="#">
                        {props.album}
                    </a>
                </div>

                <div className="track__time">
                    <svg className="track__time-svg" alt="time">
                        <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                    </svg>
                    <span className="track__time-text">{props.time}</span>
                </div>
            </div>
        </div>
    )
}
