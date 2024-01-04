import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface IBasicResponesGet {
    balance: string
    btc: string
}

interface IGetAssetReq {
    asset: string
    token: string
}

interface IResAnalitics {
    _id: string
    date: string
    balance: string
    userId: string
}

interface IgetReqAnalitics {
    token: string
    action: string
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
       }),
       createAnalitics: builder.mutation<Partial<IResAnalitics>, string>({
        query: (token) => {
            return {
                url: '/create/analitics',
                method: 'POST',
                headers: {
                    'Authorization': token
                },
            }
        }
       }),
       getAnalitics: builder.query<IResAnalitics[], IgetReqAnalitics>({
        query: (obj) => {
            return {
                url: `me/analitics/${obj.action}`,
                method: 'GET',
                headers: {
                    'Authorization': obj.token
                }
            }
        }
       })
    })
})  


export const { useGetOverviewQuery, useLazyGetOverviewQuery, useLazyGetAssetQuery, useCreateAnaliticsMutation, useLazyGetAnaliticsQuery } = globalAssetsApi

export default globalAssetsApi.reducer