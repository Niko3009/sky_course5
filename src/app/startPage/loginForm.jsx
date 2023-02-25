import { useContext, useState, useEffect } from 'react'

import { appContext } from 'app'
import { TokenRequestSelector } from 'app/access/tokenRequest'
import { AccessRequestSelector } from 'app/access/accessRequest'

import { Form } from './startPageStyle'

export const LoginForm = ({ openRegistrationForm }) => {
    const accessСontrol = useContext(appContext).accessСontrol

    const [state, setState] = useState({})
    let newState = structuredClone(state)

    const data = state.data
    const token = state.token
    const requestOn = state.requestOn
    const loginHasBeenCompleted = data && token
    const accessRequired = Boolean(!data && requestOn)
    const tokenRequired = Boolean(data && !token && requestOn)

    const [login, setLogin] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPass] = useState('')
    const formData = { username: login, email, password }

    const accessRequest = function () {
        let mistake
        if (!login || !password) mistake = 'Заполните все поля'

        newState.requestOn = mistake ? false : true
        newState.message = mistake ? mistake : 'Запрос доступа...'
        setState(newState)
    }

    const accessResponse = function ({ loading, success, error, data }) {
        if (!loading)
            if (success) {
                newState.data = data
                setState(newState)
            } else {
                newState.requestOn = false
                newState.message = error
                setState(newState)
            }
    }

    const tokenResponse = function ({ loading, success, error, data }) {
        if (!loading) {
            if (success) {
                newState.token = data
                newState.message = null
            } else {
                newState.data = null
                newState.message = error
            }
            newState.requestOn = false
            setState(newState)
        }
    }

    useEffect(() => {
        if (loginHasBeenCompleted) accessСontrol.LogIn({ data, token })
    })

    return (
        <Form>
            <Logo />

            <input
                type="text"
                name="login"
                placeholder="Логин"
                value={login}
                onChange={(event) => setLogin(event.target.value)}
            />

            <input
                type="email"
                placeholder="e-mail"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
            />

            <input
                type="password"
                name="password"
                placeholder="Пароль"
                value={password}
                onChange={(event) => setPass(event.target.value)}
            />

            <button
                onClick={() => accessRequest()}
                className={'btn-dark'}
                disabled={state.requestOn}
            >
                Войти
            </button>

            <button onClick={openRegistrationForm} className={'btn-ligth'}>
                Зарегистрироваться
            </button>

            <p>{state.message}</p>

            {accessRequired && (
                <AccessRequestSelector
                    requestData={formData}
                    getResponse={accessResponse}
                />
            )}
            {tokenRequired && (
                <TokenRequestSelector
                    requestData={formData}
                    getResponse={tokenResponse}
                />
            )}
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
