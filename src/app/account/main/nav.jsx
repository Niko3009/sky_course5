import { NavStyle as Style } from './nav/navStyle'

import { useContext } from 'react'
import { appThemeContext } from 'app'

import { useState } from 'react'

import { Link } from 'react-router-dom'

export const Nav = ({ LogOut }) => {
    const appTheme = useContext(appThemeContext)

    return (
        <Style data={appTheme.current}>
            <Logo />
            <BurgerMenu LogOut={LogOut} appTheme={appTheme} />
        </Style>
    )
}

const Logo = () => {
    const appTheme = useContext(appThemeContext)

    return (
        <Link to="/main" className="logo">
            <img
                className="logo__image"
                src={`/img/${
                    appTheme.current.name === 'dark' ? 'logo' : 'logo2'
                }.png`}
            />
        </Link>
    )
}

const BurgerMenu = ({ LogOut }) => {
    const appTheme = useContext(appThemeContext)

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
                            <Link to="/main">Главное</Link>
                        </li>
                        <li>
                            <Link to="/main/my-playlist/1">Мой плейлист</Link>
                        </li>
                        <li>
                            <p onClick={LogOut}>Выйти</p>
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
