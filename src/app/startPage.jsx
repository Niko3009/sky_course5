import { startPageStyle as Style, Form } from './startPage/startPageStyle'

import React from 'react'
const { useState } = React

export const StartPage = (props) => {
    const [status, setStatus] = useState({
        doesUserHaveAccount: true,
    })
    const statusObj = status
    const changeStatus = function (newStatus) {
        setStatus({
            doesUserHaveAccount: newStatus.doesUserHaveAccount,
        })
    }

    const openRegistrationForm = function () {
        statusObj.doesUserHaveAccount = false
        changeStatus(statusObj)
    }

    const openLoginForm = function () {
        statusObj.doesUserHaveAccount = true
        changeStatus(statusObj)
    }

    return (
        <Style>
            {status.doesUserHaveAccount && (
                <LoginForm
                    logIn={props.logIn}
                    openRegistrationForm={openRegistrationForm}
                />
            )}

            {!status.doesUserHaveAccount && (
                <RegistrationForm openLoginForm={openLoginForm} />
            )}
        </Style>
    )
}

const LoginForm = (props) => {
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
                    props.logIn('Гость')
                }}
                className={'btn-dark'}
            >
                Войти
            </button>
            <button
                onClick={() => {
                    props.openRegistrationForm()
                }}
                className={'btn-ligth'}
            >
                Зарегистрироваться
            </button>
        </Form>
    )
}

const RegistrationForm = (props) => {
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

            <button
                onClick={() => {
                    props.openLoginForm()
                }}
                className={'btn-dark'}
            >
                Зарегистрироваться
            </button>
        </Form>
    )
}

const Logo = () => {
    return (
        <div>
            <img className='logo' src="/img/logo2.png" />
        </div>
    )
}
