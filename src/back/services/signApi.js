import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const TRACKS_TAG = { type: 'TRACKS', id: 'LIST' }
const FAVORS_TAG = { type: 'FAVORS', id: 'LIST' }

export const signApi = createApi({
    reducerPath: 'sign',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://painassasin.online/',

        prepareHeaders: (headers, { getState }) => {
            const rootState = getState()

            const token = rootState?.user?.token
            if (token) headers.set('Authorization', `Bearer ${token.access}`)

            return headers
        },
    }),

    // | Зарегистрироваться      | POST | /user/signup/
    // | Войти                   | POST | /user/login/
    // | Получить ключ           | POST | /user/token/
    // | Обновить ключ           | POST | /user/token/refresh/

    endpoints: (builder) => ({
        // Access

        enterAccount: builder.mutation({
            query: (body) => ({
                url: 'user/login/',
                method: 'POST',
                body,
            }),
        }),

        addAccount: builder.mutation({
            query: (body) => ({
                url: 'user/signup/',
                method: 'POST',
                body,
            }),
        }),

        getToken: builder.mutation({
            query: (body) => ({
                url: 'user/token/',
                method: 'POST',
                body,
            }),
        }),

        refreshToken: builder.mutation({
            query: (body) => ({
                url: 'user/token/refresh/',
                method: 'POST',
                body,
            }),
        }),

        // Tracks

        getAllTracks: builder.query({
            query: () => 'catalog/track/all/',
            providesTags: (result = []) => [
                ...result.map(({ id }) => ({ type: TRACKS_TAG.type, id })),
                TRACKS_TAG,
            ],
        }),

        getIndieChargeTracks: builder.query({
            query: () => 'catalog/selection/1/',
            providesTags: (result = []) => [
                ...result.items.map(({ id }) => ({
                    type: TRACKS_TAG.type,
                    id,
                })),
                TRACKS_TAG,
            ],
        }),

        getDanceHitsTracks: builder.query({
            query: () => 'catalog/selection/2/',
            providesTags: (result = []) => [
                ...result.items.map(({ id }) => ({
                    type: TRACKS_TAG.type,
                    id,
                })),
                TRACKS_TAG,
            ],
        }),

        getPlaylistOfDayTracks: builder.query({
            query: () => 'catalog/selection/3/',
            providesTags: (result = []) => [
                ...result.items.map(({ id }) => ({
                    type: TRACKS_TAG.type,
                    id,
                })),
                TRACKS_TAG,
            ],
        }),

        getAllFavors: builder.query({
            query: () => 'catalog/track/favorite/all/',
            providesTags: (result = []) => [
                ...result.map(({ id }) => ({ type: FAVORS_TAG.type, id })),
                FAVORS_TAG,
            ],
        }),

        // Acts

        addLike: builder.mutation({
            query: (data) => ({
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
                url: `catalog/track/${data.trackId}/favorite/`,
                method: 'POST',
                body: data,
            }),
            invalidatesTags: [FAVORS_TAG],
        }),

        delLike: builder.mutation({
            query: (data) => ({
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
                url: `catalog/track/${data.trackId}/favorite/`,
                method: 'DELETE',
                body: data,
            }),
            invalidatesTags: [FAVORS_TAG],
        }),
    }),
})

export default signApi
export const {
    // Access
    useEnterAccountMutation,
    useAddAccountMutation,
    useGetTokenMutation,
    useRefreshTokenMutation,
    // Tracks
    useGetAllTracksQuery,
    useGetAllFavorsQuery,
    useGetIndieChargeTracksQuery,
    useGetDanceHitsTracksQuery,
    useGetPlaylistOfDayTracksQuery,
    // Acts
    useAddLikeMutation,
    useDelLikeMutation,
} = signApi
