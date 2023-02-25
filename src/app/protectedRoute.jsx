import { Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

import { idFromStore } from 'back/selectors/userSelector'

export const ProtectedRoute = ({ children, redirectPath = '/' }) => {
    const id = useSelector(idFromStore)
    if (!id) return <Navigate to={redirectPath} replace={true} />
    return children
}
