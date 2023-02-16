import { NavStyle as Style } from './nav/navStyle'

import { useContext, useState } from 'react'
import { appContext } from 'app'

import { Link } from 'react-router-dom'

export const Nav = () => {
    const appTheme = useContext(appContext).appTheme

    return (
        <Style data={appTheme.current}>
            <Logo />
            <BurgerMenu />
        </Style>
    )
}

const Logo = () => {
    const id = useContext(appContext).user.id
    const appTheme = useContext(appContext).appTheme

    return (
        <Link to={`/main/${id}/`} className="logo">
            <img
                className="logo__image"
                src={`/img/${
                    appTheme.current.name === 'dark' ? 'logo' : 'logo2'
                }.png`}
            />
        </Link>
    )
}

const BurgerMenu = () => {
    const accessСontrol = useContext(appContext).accessСontrol
    const appTheme = useContext(appContext).appTheme
    const id = useContext(appContext).user.id

    const [visible, setVisible] = useState(true)
    const switchVisibility = () => setVisible(!visible)

    const switchAppTheme = () => {
        appTheme.set(appTheme.current.name === 'dark' ? 'light' : 'dark')
    }

    return (
        <div>
            <BurgerWidget switchVisibility={switchVisibility} />

            {visible && (
                <div>
                    <ul>
                        <li>
                            <Link to={`/main/${id}/`}>Главное</Link>
                        </li>
                        <li>
                            <Link to={`/main/${id}/my-playlist/`}>
                                Мой плейлист
                            </Link>
                        </li>
                        <li>
                            <p onClick={accessСontrol.LogOut}>Выйти</p>
                        </li>
                    </ul>

                    <svg
                        onClick={switchAppTheme}
                        style={{
                            stroke: appTheme.current.colorN1,
                            fill: appTheme.current.colorN1,
                        }}
                    >
                        <use
                            xlinkHref={`/img/icon/themeIcon.svg#${
                                appTheme.current.name === 'dark'
                                    ? 'moon'
                                    : 'sun'
                            }`}
                        ></use>
                    </svg>
                </div>
            )}
        </div>
    )
}

const BurgerWidget = ({ switchVisibility }) => {
    return (
        <div onClick={switchVisibility} className="burger">
            <span />
            <span />
            <span />
        </div>
    )
}
