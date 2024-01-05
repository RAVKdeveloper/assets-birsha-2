import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


interface IReqFunding {
    balance: string
    btc: string
}

interface IReqCoins {
    token: string
    search: string
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



export const FundingApi = createApi({
    reducerPath: 'FundingApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000/api/assets/Funding' }),
    endpoints: builder => ({
        getFundingBalance: builder.query<IReqFunding, string>({
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
        getCoins: builder.query<IResCoins[], IReqCoins>({
            query: (obj) => {
                return {
                    url: `/coins/${obj.search ? obj.search : 'AllCoins'}`,
                    method: 'GET',
                    headers: {
                        'Authorization': obj.token
                    }
                }
            }
        })
    })
})


export const { useLazyGetFundingBalanceQuery, useLazyGetCoinsQuery } = FundingApi

export default FundingApi.reducer