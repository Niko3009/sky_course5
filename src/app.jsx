import { AppStyle as Style } from './app/appStyle'

import React from 'react'
const { useState } = React

import { StartPage } from './app/startPage'
import { Account } from './app/account'

const App = () => {
    const [status, setStatus] = useState({
        login: null,
    })
    const statusObj = status
    const changeStatus = function (newStatus) {
        setStatus({
            login: newStatus.login,
        })
    }

    const logIn = function (login) {
        statusObj.login = login
        changeStatus(statusObj)
    }

    const logOut = function () {
        statusObj.login = null
        changeStatus(statusObj)
    }

    return (
        <Style>
            {!status.login && <StartPage logIn={logIn} />}

            {status.login && (
                <Account logOut={logOut} account={statusObj.login} />
            )}
        </Style>
    )
}

export default App
