import { useContext } from 'react'
import { appContext } from 'app'

import { Navigate } from 'react-router-dom'

export const ProtectedRoute = ({ children, redirectPath = '/' }) => {
    const user = useContext(appContext).user

    const isAllowed = Boolean(user.token?.access)

    if (!isAllowed) {
        return <Navigate to={redirectPath} replace={true} />
    }
    return children
}
