import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


interface IResCrypto {
    abriatur: string
    name: string
    img: string
    _id: string
}

interface IChainRes {
    name: string,
    fees: string
    coin: string
    _id: string
}

interface IReqChain {
    token: string
    coin: string
}


export const withdrawApi = createApi({
    reducerPath: 'withdrawApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000/api/withdraw' }),
    endpoints: (builder) => ({
        getCryptoList: builder.query<IResCrypto[], string>({
            query: (token) => {
                return {
                    url: '/crypto',
                    method: 'GET',
                    headers: {
                        'Authorization': token
                    }
                }
            }
        }),
        getChainList: builder.mutation<Partial<IChainRes[]>, IReqChain>({
            query: (obj) => {
                return {
                   url: '/chain',
                   method: 'POST',
                   headers: {
                    'Authorization': obj.token
                   },
                   body: { coin: obj.coin }
                }
            }
        })
    })
})


export const { useLazyGetCryptoListQuery, useGetChainListMutation } = withdrawApi

export default withdrawApi.reducer