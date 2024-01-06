import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


interface IResBalance {
    balance: string
    btc: string
}

interface IReqCoins {
    token: string
    searchValue: string
}

interface IResCoins {
    _id: string
    name: string
    fullname: string
    asset: string
    balance: string
    userId: string
    img: string
}



export const SpotApi = createApi({
    reducerPath: 'SpotApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000/api/assets/Spot' }),
    endpoints: builder => ({
        getBalance: builder.query<IResBalance, string>({
            query: token => {
                return {
                    url: '/',
                    method: 'GET',
                    headers: {
                        'Authorization': token
                    }
                }
            }
        }),
        getCoinList: builder.query<IResCoins[], IReqCoins>({
            query: obj => {
                return {
                    url:  `/coins/${obj.searchValue ? obj.searchValue : 'AllCoins'}`,
                    method: 'GET',
                    headers: {
                        'Authorization': obj.token
                    }
                }
            }
        })
    })
})


export const { useLazyGetBalanceQuery, useLazyGetCoinListQuery } = SpotApi

export default SpotApi.reducer