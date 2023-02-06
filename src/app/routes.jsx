import { Routes, Route } from 'react-router-dom'

import { StartPage } from './startPage'
import { Account } from './account'
import { Profile } from './profile'

import { ProtectedRoute } from './protectedRoute'
import { NotFound } from './notFound'

export const AppRoutes = ({ user, userAccessСontrol }) => {
    return (
        <Routes>
            <Route
                path="/"
                element={<StartPage LogIn={userAccessСontrol.LogIn} />}
            />
            <Route
                path="/main/*"
                element={
                    <ProtectedRoute isAllowed={Boolean(user)}>
                        <Account LogOut={userAccessСontrol.LogOut} />
                    </ProtectedRoute>
                }
            />

            <Route path="/profile/:id" element={<Profile />} />

            <Route path="*" element={<NotFound />} />
        </Routes>
    )
}
