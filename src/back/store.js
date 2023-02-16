import { configureStore } from '@reduxjs/toolkit'

import { signApi } from 'back/services/signApi.js'

export const store = configureStore({
    reducer: {
        [signApi.reducerPath]: signApi.reducer,
    },

    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(signApi.middleware),
})
