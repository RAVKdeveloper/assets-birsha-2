import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface IBasicResponesGet {
    balance: string
    btc: string
}

export const globalAssetsApi = createApi({
    reducerPath: 'globalAssetsApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000/api/assets' }),
    endpoints: (builder) => ({
       getOverview: builder.query<IBasicResponesGet, string>({
          query: (token) => {
            return {
                url: '/overview',
                method: 'GET',
                headers: {
                   'Authorization': token
                }
            }
          }
       })
    })
})


export const { useGetOverviewQuery, useLazyGetOverviewQuery } = globalAssetsApi

export default globalAssetsApi.reducer