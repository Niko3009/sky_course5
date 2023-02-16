import { Routes, Route } from 'react-router-dom'

import { StartPage } from './startPage'
import { Account } from './account'
// import { Profile } from './profile'

import { ProtectedRoute } from './protectedRoute'
import { NotFound } from './notFound'

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
