import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface CoinRes {
    _id: string
    name: string
    img: string
    abriatur: string
}

interface BalanceReq {
    asset: string
    coin: string
    token: string
}

interface BalanceRes {
    _id: string
    name: string
    asset: string
    balance: string
}

interface OrderReq {
    coin: string
    amount: string
    to: string
    from: string
    token: string
}

interface OrderRes {
    message: string
}

export const transferApi = createApi({
    reducerPath: 'transferApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000/api/transfer' }),
    endpoints: (builder) => ({
        getCoins: builder.query<CoinRes[], string>({
            query: token => {
                return {
                    url: '/coins',
                    method: 'GET',
                    headers: {
                        'Authorization': token
                    }
                }
            }
        }),
        getBalance: builder.query<BalanceRes, BalanceReq>({
            query: (obj) => {
                return{
                    url: `/${obj.asset}/${obj.coin}/balance`,
                    method: 'GET',
                    headers: {
                        'Authorization': obj.token
                    }
                }
            }
        }),
        createTransfer: builder.mutation<OrderRes, Partial<OrderReq>>({
            query: obj => {
                return {
                    url: '/createOrder',
                    method: 'POST',
                    headers: {
                        'Authorization': obj.token
                    },
                    body: {
                        coin: obj.coin,
                        amount: obj.amount,
                        to: obj.to,
                        from: obj.from
                    }
                }
            }
        })
    })
})



export const { useLazyGetCoinsQuery, useLazyGetBalanceQuery, useCreateTransferMutation } = transferApi

export default transferApi.reducer