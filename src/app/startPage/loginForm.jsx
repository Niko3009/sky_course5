import { useContext, useState, useEffect } from 'react'

import { appContext } from 'app'
import { TokenRequestSelector } from 'app/access/tokenRequest'
import { AccessRequestSelector } from 'app/access/accessRequest'

import { Logo } from './logo'
import { Form } from './startPageStyle'

export const LoginForm = ({
    openRegistrationForm,
    test = { on: false, id: null, func: null },
}) => {
    const accessСontrol = useContext(appContext)?.accessСontrol

    const initState = { data: null, token: null, requestOn: null, message: '' }
    const [state, setState] = useState(initState)
    // let newState = structuredClone(state)
    let newState = Object.assign({}, state)

    const data = state.data
    const token = state.token
    const userHasBeenCompleted = data && token

    const requestOn = state.requestOn && !test.on
    const accessRequired = Boolean(!data && requestOn)
    const tokenRequired = Boolean(data && !token && requestOn)

    const [username, setLogin] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPass] = useState('')
    const formData = { email, username, password }
    // const formData = {
    //     username: 'testUser52',
    //     email: 'testUser52@mail.ru',
    //     password: 't546tgr52',
    // }

    const accessRequest = function () {
        let mistake
        if (!username || !password) mistake = 'Заполните все поля'

        const isFormValid = !mistake
        newState.requestOn = isFormValid
        newState.message = isFormValid ? 'Запрос доступа...' : mistake
        setState(newState)
    }

    const accessResponse = function ({ data, isSuccess, error }) {
        if (isSuccess) {
            newState.data = data
        } else {
            newState.requestOn = false
            newState.message = error
        }
        setState(newState)
    }

    const tokenResponse = function ({ data, isSuccess, error }) {
        if (isSuccess) {
            newState.token = data
            newState.message = null
        } else {
            newState.data = null
            newState.message = error
        }
        newState.requestOn = false
        setState(newState)
    }

    useEffect(() => {
        if (userHasBeenCompleted) accessСontrol.LogIn({ data, token })
    })

    return (
        <Form>
            <Logo />

            <input
                type="text"
                name="username"
                placeholder="Логин"
                value={username}
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
                className={'btn-dark'}
                onClick={test.on ? test.func : accessRequest}
                disabled={state.requestOn}
                data-testid={test.id}
            >
                Войти
            </button>

            <button onClick={openRegistrationForm} className={'btn-ligth'}>
                Зарегистрироваться
            </button>

            <p>{state.message}</p>

            <AccessRequestSelector
                requestData={formData}
                responseReceiver={accessResponse}
                isRequestActivated={accessRequired}
            />
            <TokenRequestSelector
                requestData={formData}
                responseReceiver={tokenResponse}
                isRequestActivated={tokenRequired}
            />
        </Form>
    )
}
