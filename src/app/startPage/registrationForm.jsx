import { useState, useEffect } from 'react'

import { useAddAccountMutation } from 'back/services/signApi'

import { Form } from './startPageStyle'

export const RegistrationForm = ({ openLoginForm }) => {
    const [addAccount, { isLoading, isSuccess, isError, error }] =
        useAddAccountMutation()

    const [newLogin, setNewLogin] = useState('')
    const [email, setEmail] = useState('')
    const [newPassword, setNewPassword] = useState('')
    const [checkPassword, setCheckPassword] = useState('')
    const [message, setMessage] = useState('')

    const userData = {
        username: 'sta12',
        email: 'sta12@mail.ru',
        password: 'Gfhjkm3434',
    }
    // {
    //     username: newLogin,
    //     email: `${newLogin}@mail.ru`,
    //     password: newPassword,
    // }

    const signUp = function () {
        if (!newLogin || !newPassword || !email) {
            setMessage('Заполните все поля')
            return
        }
        if (newPassword !== checkPassword) {
            setMessage('Пароли не совпадают')
            return
        }
        setMessage('')

        addAccount(userData)
    }

    useEffect(() => {
        if (isSuccess) {
            openLoginForm()
            return
        }

        if (isError && !message) {
            const reason = error.data
            let message = 'Неизвестная ошибка'
            if (reason.email) message = reason.email
            if (reason.username) message = reason.username
            setMessage(message)
        }
    })

    return (
        <Form className="reg">
            <Logo />

            <input
                type="text"
                placeholder="Логин"
                value={newLogin}
                onChange={(event) => setNewLogin(event.target.value)}
            />

            <input
                type="email"
                placeholder="e-mail"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
            />

            <input
                type="password"
                placeholder="Пароль"
                value={newPassword}
                onChange={(event) => setNewPassword(event.target.value)}
            />

            <input
                type="password"
                placeholder="Повторите пароль"
                value={checkPassword}
                onChange={(event) => setCheckPassword(event.target.value)}
            />

            <button
                onClick={() => signUp()}
                className={'btn-dark'}
                disabled={isLoading}
            >
                Зарегистрироваться
            </button>

            <button onClick={openLoginForm} className={'btn-ligth'}>
                Войти в аккаунт
            </button>

            <p>{message}</p>
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
