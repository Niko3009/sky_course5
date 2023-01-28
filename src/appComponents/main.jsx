import React from 'react'
const { useState } = React

import { SideBar } from './main/sideBar'
import { CenterBlock } from './main/centerBlock'

const Logo = () => {
    return (
        <div className="nav__logo logo">
            <img className="logo__image" src="./img/logo.png" alt="logo" />
        </div>
    )
}

const BurgerMenu = () => {
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
            )}
        </div>
    )
}

export const Main = () => {
    return (
        <main className="main">
            <nav className="main__nav nav">
                <Logo />
                <BurgerMenu />
            </nav>

            <CenterBlock />

            <SideBar />
        </main>
    )
}
