import { useContext, useState, useEffect } from 'react'

import { appContext } from 'app'

import { Form } from './startPageStyle'
import { AccessRequestSelector } from 'app/access/accessRequest'
import { TokenRequestSelector } from 'app/access/tokenRequest'

export const LoginForm = ({ openRegistrationForm }) => {
    const accessСontrol = useContext(appContext).accessСontrol
    const currentUser = useContext(appContext).user

    const [newUser, setNewUser] = useState(currentUser)
    const [login, setLogin] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const formData = {
        username: 'sta12',
        email: 'sta12@mail.ru',
        password: 'Gfhjkm3434',
    }

    const [state, setState] = useState({
        requestActivity: false,
        message: '',
    })
    const stateObj = state
    const setNewState = function (newState) {
        setState({
            userIsReady: Boolean(newUser.data && newUser.token),
            requestActivity: newState.requestActivity,
            message: newState.message,
        })
    }

    const userIsReady = Boolean(newUser.data && newUser.token)
    const accessRequired = Boolean(!newUser.data && state.requestActivity)
    const tokenRequired = Boolean(
        newUser.data && !newUser.token && state.requestActivity
    )

    const accessRequest = function () {
        let mistake = ''

        // if (!login || !password) mistake = 'Заполните все поля'

        if (!mistake) {
            state.requestActivity = true
            state.message = 'Запрос доступа...'
        } else {
            state.requestActivity = false
            state.message = mistake
        }

        setNewState(state)
    }

    const accessResponse = function (response) {
        if (response.loading) {
            // console.log('accessResponse:', 'is loading')
        } else {
            if (response.success) {
                // console.log('accessResponse:', 'is success')
                setNewUser({
                    data: response.data,
                })
            } else {
                // console.log('accessResponse:', 'is error')
                state.requestActivity = false
                state.message = response.error

                setNewState(state)
            }
        }
    }

    const tokenResponse = function (response) {
        if (response.loading) {
            // console.log('tokenResponse:', 'is loading')
        } else {
            if (response.success) {
                // console.log('tokenResponse:', 'is success')
                setNewUser({
                    data: newUser.data,
                    token: response.data,
                })
            } else {
                // console.log('tokenResponse:', 'is error')
                stateObj.requestActivity = false
                stateObj.message = response.error
                setNewState(stateObj)
            }
        }
    }

    const LogIn = function () {
        accessСontrol.LogIn(newUser)
    }

    useEffect(() => {
        if (userIsReady) LogIn()
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
                onChange={(event) => setPassword(event.target.value)}
            />

            <button
                onClick={() => accessRequest()}
                className={'btn-dark'}
                disabled={state.requestActivity}
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
                    accessResponse={accessResponse}
                />
            )}
            {tokenRequired && (
                <TokenRequestSelector
                    requestData={formData}
                    tokenResponse={tokenResponse}
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
