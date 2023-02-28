import { Routes, Route } from 'react-router-dom'

import { StartPage } from './startPage'
import { ProtectedRoute } from './protectedRoute'
import { Account } from './account'
import { NotFound } from './notFound'
// import { Profile } from './profile'

export const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<StartPage />} />
            <Route path="/main/:id/*" element={<ProtectedLine />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    )
}

export const ProtectedLine = () => {
    return (
        <ProtectedRoute>
            <Account />
        </ProtectedRoute>
    )
}
