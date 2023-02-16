import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const TRACKS_TAG = { type: 'Todos', id: 'LIST' }

export const signApi = createApi({
    reducerPath: 'signApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://painassasin.online/',
        prepareHeaders: (headers, { getState }) => {
            console.log(getState())
            // const token = getState().auth
            // if (token) {
            //     headers.set('Authorization', `Bearer ${token}`)
            // }
            // return headers
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

        updateToken: builder.mutation({
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

        addLike: builder.mutation({
            query: (requestData) => ({
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
                url: `catalog/track/${requestData.trackID}/favorite/`,
                method: 'POST',
                body: requestData.body,
            }),
        }),

        deleteLike: builder.mutation({
            query: (body, id) => ({
                url: `catalog/track/${id}/favorite/`,
                method: 'DELETE',
                body,
            }),
        }),
    }),
})

export const {
    useEnterAccountMutation,
    useAddAccountMutation,
    useGetTokenMutation,
    useUpdateTokenMutation,
    useGetAllTracksQuery,
    useAddLikeMutation,
    useDeleteLikeMutation,
} = signApi
