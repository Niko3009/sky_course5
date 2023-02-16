import { startPageStyle as Style } from './startPage/startPageStyle'

import { useContext, useState } from 'react'
import { appContext } from 'app'

import { LoginForm } from './startPage/loginForm'
import { RegistrationForm } from './startPage/registrationForm'

export const StartPage = () => {
    const appTheme = useContext(appContext).appTheme

    const [loginFormState, setState] = useState(true)

    const changeForm = function () {
        setState(!loginFormState)
    }

    return (
        <Style data={appTheme.current}>
            {loginFormState && <LoginForm openRegistrationForm={changeForm} />}
            {!loginFormState && <RegistrationForm openLoginForm={changeForm} />}
        </Style>
    )
}
