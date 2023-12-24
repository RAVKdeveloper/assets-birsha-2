import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { UserType } from '../../types/types'


export const userBasicInfo = createApi({
    reducerPath: 'userBasicInfo',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://654f4fed358230d8f0cd31a4.mockapi.io/ravk/users' }),
    endpoints: (builder) => ({
        fetchUser: builder.query<UserType, string | null>({
            query: (id) => `/${id}`
        })
    })
})

export const { useFetchUserQuery } = userBasicInfo