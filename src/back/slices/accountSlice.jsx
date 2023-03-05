import { createSlice } from '@reduxjs/toolkit'

const initState = {
    track: null,
    trackList: null,
}

export const accountSlice = createSlice({
    name: 'account',
    initialState: initState,
    reducers: {
        setPlayTrack: (state, { payload }) => {
            state.track = payload.track
        },
        setTrackList: (state, { payload }) => {
            state.trackList = payload.tracks
        },
        clearAccount: (state) => {
            Object.keys(state).forEach((N) => (state[N] = initState[N]))
        },
    },
})

export default accountSlice.reducer
export const { setPlayTrack, setTrackList, clearAccount } = accountSlice.actions
