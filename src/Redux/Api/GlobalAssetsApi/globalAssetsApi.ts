import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface IBasicResponesGet {
    balance: string
    btc: string
}

interface IGetAssetReq {
    asset: string
    token: string
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
       }),
       getAsset: builder.query<IBasicResponesGet, IGetAssetReq>({
        query: (obj) => {
            return {
                url: `/${obj.asset}`,
                method: 'GET',
                headers: {
                    'Authorization': obj.token
                }
            }
        }
       })
    })
})  


export const { useGetOverviewQuery, useLazyGetOverviewQuery, useLazyGetAssetQuery } = globalAssetsApi

export default globalAssetsApi.reducer