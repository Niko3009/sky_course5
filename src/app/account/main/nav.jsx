import React from 'react'
const { useState } = React

import { navStyle as Style } from './nav/navStyle'

const Logo = (props) => {
    return (
        <div
            onClick={() => {
                props.changeSection('AllTracks')
            }}
            className="nav__logo logo"
        >
            <img className="logo__image" src="/img/logo.png" />
        </div>
    )
}

const BurgerMenu = (props) => {
    const [visible, setVisible] = useState(true)

    const switchVisibility = () => setVisible(!visible)

    return (
        <div>
            <div onClick={switchVisibility} className="nav__burger burger">
                <span className="burger__line"></span>
                <span className="burger__line"></span>
                <span className="burger__line"></span>
            </div>

            {visible && (
                <div className="nav__menu menu">
                    <ul className="menu__list">
                        <li className="menu__item">
                            <a
                                onClick={() => {
                                    props.changeSection('AllTracks')
                                }}
                                className="menu__link"
                            >
                                Главное
                            </a>
                        </li>
                        <li className="menu__item">
                            <a
                                onClick={() => {
                                    props.changeSection('MyPlaylist')
                                }}
                                className="menu__link"
                            >
                                Мой плейлист
                            </a>
                        </li>
                        <li className="menu__item">
                            <a
                                onClick={() => {
                                    props.logOut()
                                }}
                                className="menu__link"
                            >
                                Выйти
                            </a>
                        </li>
                    </ul>
                </div>
            )}
        </div>
    )
}

export const Nav = (props) => {
    return (
        <Style>
            <Logo changeSection={props.changeSection} />
            <BurgerMenu
                changeSection={props.changeSection}
                logOut={props.logOut}
            />
        </Style>
    )
}
