import { createSlice } from '@reduxjs/toolkit'

const initState = { token: null, data: null, id: null }

export const userSlice = createSlice({
    name: 'user',
    initialState: initState,
    reducers: {
        globalSetUser: (state, { payload: { token, data, id } }) => {
            state.token = token
            state.data = data
            state.id = id
        },

        globalSetUserToken: (state, { payload: { token } }) => {
            state.token = token
        },

        globalClearUser: (state) => {
            Object.keys(state).forEach((N) => (state[N] = initState[N]))
        },
    },
})

export default userSlice.reducer
export const { globalSetUser, globalClearUser, globalSetUserToken } =
    userSlice.actions
