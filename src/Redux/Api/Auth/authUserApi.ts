import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { UserTypeMain } from "../../../types/types";

interface RegData {
    nick: string,
    email: string,
    password: string,
    verificationName: string
}

interface LogData {
    email: string
    password: string
}

export const authUserApi = createApi({
    reducerPath: 'authUserApi',
    tagTypes: ['UserAuth'],
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000/api/auth' }),
    endpoints: (builder) => ({
        Registration: builder.mutation<UserTypeMain, Partial<RegData>>({
            query: (body) => {
               return {
                url: '/registration',
                method: 'POST',
                body
               }
            }
        }),
        Login: builder.mutation<UserTypeMain, Partial<LogData>>({
            query: (body) => {
                return {
                    url: '/login',
                    method: 'POST',
                    body
                }
            }
        }),
        AuthMe: builder.query<UserTypeMain, string>({
            query: (token) => {
                return {
                    url: '/me',
                    method: 'GET',
                    headers: {
                        'Authorization': token
                    }
                }
            }
        })
    })
})

export const { useRegistrationMutation, useLoginMutation, useAuthMeQuery, useLazyAuthMeQuery } = authUserApi


