import { useContext, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import { idFromStore } from 'back/selectors/userSelector'
import { appContext } from 'app'

import { NavStyle as Style } from './nav/navStyle'

export const Nav = () => {
    const appTheme = useContext(appContext).appTheme
    const id = useSelector(idFromStore)

    return (
        <Style data={appTheme.current}>
            <Logo id={id} appTheme={appTheme} />
            <BurgerMenu id={id} />
        </Style>
    )
}

const BurgerMenu = ({ id }) => {
    const accessСontrol = useContext(appContext).accessСontrol

    const [visible, setVisible] = useState(true)
    const switchVisibility = () => setVisible(!visible)

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

                    <ThemeSwitcher />
                </div>
            )}
        </div>
    )
}

const Logo = ({ id, appTheme }) => {
    const logoName =
        appTheme.current.name === 'dark' ? 'logo_light' : 'logo_dark'
    const logoSrc = `/img/${logoName}.png`

    return (
        <Link to={`/main/${id}/`} className="logo">
            <img className="logo__image" src={logoSrc} />
        </Link>
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

export const ThemeSwitcher = ({
    test = { on: false, id: null, func: null },
}) => {
    const appTheme = useContext(appContext).appTheme
    return (
        <div data-testid={test.id}>
            <svg
                onClick={() => {
                    appTheme.set()
                }}
                style={{
                    stroke: appTheme.current.colorN1,
                    fill: appTheme.current.colorN1,
                }}
            >
                <use
                    xlinkHref={`/img/icon/themeIcon.svg#${
                        appTheme.current.name === 'dark' ? 'moon' : 'sun'
                    }`}
                ></use>
            </svg>
        </div>
    )
}
