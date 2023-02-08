import { startPageStyle as Style, Form } from './startPage/startPageStyle'

import { useContext } from 'react'
import { appThemeContext } from 'app'

import { useState } from 'react'

export const StartPage = ({ LogIn }) => {
    const appTheme = useContext(appThemeContext)

    const [doesUserHaveAccount, setState] = useState(true)

    const changeForm = function () {
        setState(!doesUserHaveAccount)
    }

    return (
        <Style data={appTheme.current}>
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
