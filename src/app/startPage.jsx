import { startPageStyle as Style, Form } from './startPage/startPageStyle'

import React from 'react'
const { useState } = React

export const StartPage = ({ LogIn }) => {
    const [doesUserHaveAccount, setState] = useState(true)

    const changeForm = function () {
        setState(!doesUserHaveAccount)
    }

    return (
        <Style>
            {doesUserHaveAccount && (
                <LoginForm LogIn={LogIn} openRegistrationForm={changeForm} />
            )}

            {!doesUserHaveAccount && (
                <RegistrationForm openLoginForm={changeForm} />
            )}
        </Style>
    )
}

const LoginForm = ({ LogIn, openRegistrationForm }) => {
    return (
        <Form>
            <Logo />

            <input type="text" name="login" placeholder="Логин (пока любой)" />

            <input
                type="password"
                name="password"
                placeholder="Пароль (пока любой)"
            />

            <button
                onClick={() => {
                    LogIn('Гость')
                }}
                className={'btn-dark'}
            >
                Войти
            </button>

            <button onClick={openRegistrationForm} className={'btn-ligth'}>
                Зарегистрироваться
            </button>
        </Form>
    )
}

const RegistrationForm = ({ openLoginForm }) => {
    return (
        <Form>
            <Logo />

            <input type="text" name="login" placeholder="Логин (пока любой)" />

            <input
                type="password"
                name="password"
                placeholder="Пароль (пока любой)"
            />

            <input
                type="password"
                name="password"
                placeholder="Повторите пароль"
            />

            <button onClick={openLoginForm} className={'btn-dark'}>
                Зарегистрироваться
            </button>
        </Form>
    )
}

const Logo = () => {
    return (
        <div>
            <img className="logo" src="/img/logo2.png" />
        </div>
    )
}
