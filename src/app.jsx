import { AppStyle as Style } from './app/appStyle'

import { AppRoutes } from './app/routes'
import { useNavigate } from 'react-router-dom'

import React from 'react'
// const { useState } = React

const App = () => {
    let navigate = useNavigate()

    // const [user, setUser] = useState(null)

    const userAccessСontrol = {
        LogIn: () => {
            // setUser({ login: login })
            localStorage.setItem('token', '1234')
            navigate('/main', { replace: true })
        },
        LogOut: () => {
            // setUser(null)
            localStorage.clear()
            navigate('/', { replace: true })
        },
    }

    return (
        <Style>
            <AppRoutes
                user={localStorage.getItem('token')}
                userAccessСontrol={userAccessСontrol}
            />
        </Style>
    )
}

export default App
