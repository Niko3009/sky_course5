import { navStyle as Style } from './nav/navStyle'

import React from 'react'
const { useState } = React

import { Link } from 'react-router-dom'

export const Nav = ({ LogOut }) => {
    return (
        <Style>
            <Logo />
            <BurgerMenu LogOut={LogOut} />
        </Style>
    )
}

const Logo = () => {
    return (
        <Link to="/main" className="logo">
            <img className="logo__image" src="/img/logo.png" />
        </Link>
    )
}

const BurgerMenu = ({ LogOut }) => {
    const [visible, setVisible] = useState(true)

    const switchVisibility = () => setVisible(!visible)

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
