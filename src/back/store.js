import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'

import signApi from 'back/services/signApi.js'
import userReduser from 'back/slices/userSlice'
import accountReduser from 'back/slices/accountSlice'

const rootReduser = combineReducers({
    user: userReduser,
    account: accountReduser,
    [signApi.reducerPath]: signApi.reducer,
})

export const store = configureStore({
    reducer: rootReduser,

    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(signApi.middleware),
})
