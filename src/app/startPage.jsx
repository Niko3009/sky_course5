import { useContext, useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { idFromStore } from 'back/selectors/userSelector'
import { appContext } from 'app'

import { LoginForm } from './startPage/loginForm'
import { RegistrationForm } from './startPage/registrationForm'

import { startPageStyle as Style } from './startPage/startPageStyle'

export const StartPage = () => {
    const navigate = useNavigate()
    const id = useSelector(idFromStore)
    const appTheme = useContext(appContext).appTheme

    const [loginFormState, setState] = useState(true)
    const changeForm = () => setState(!loginFormState)

    useEffect(() => {
        if (id) navigate(`/main/${id}/`, { replace: true })
    })

    return (
        <Style data={appTheme.current}>
            {loginFormState && <LoginForm openRegistrationForm={changeForm} />}
            {!loginFormState && <RegistrationForm openLoginForm={changeForm} />}
        </Style>
    )
}
