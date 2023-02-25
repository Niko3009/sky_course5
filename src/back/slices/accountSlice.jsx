import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    track: null,
    trackList: null,
}

export const accountSlice = createSlice({
    name: 'account',
    initialState,
    reducers: {
        setPlayTrack: (state, { payload }) => {
            state.track = payload.track
        },
        setTrackList: (state, { payload }) => {
            state.trackList = payload.tracks
        },
    },
})

export default accountSlice.reducer
export const { setPlayTrack, setTrackList } = accountSlice.actions
