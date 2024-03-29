import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


interface ResponesConfigurationAssets {
    message: string
}

interface IResCoinConfig {
    message: string
}

export const createAssetsApi = createApi({
    reducerPath: 'createAssetsApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000/api/assets' }),
    endpoints: (builder) => ({
        createSpot: builder.mutation<Partial<ResponesConfigurationAssets>, string>({
           query: (token) => {
            return{
               url: '/createAssets',
               method: 'POST',
               headers: {
                'Authorization': token
               }
            }
           }
        }),
        createCoinBalance: builder.mutation<Partial<IResCoinConfig>, string>({
            query: (token) => {
                return {
                    url: '/createCoinBalance',
                    method: 'POST',
                    headers: {
                        'Authorization': token
                    }
                }
            }
        })
    })
})


export const { useCreateSpotMutation, useCreateCoinBalanceMutation } = createAssetsApi

export default createAssetsApi.reducer