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

interface IResBalance {
    asset: string
    _id: string
    balance: string
    userId: string
    name: string
}

interface IReqBalance {
    token: string
    asset: string
    coin: string
}

interface IReqOrder {
    coin: string,
    fee: string
    address: string
    type: string
    amount: string
    asset: string
    token: string
    chain: string
}

interface IResOrder {
    coin: string,
    fee: string
    address: string
    type: string
    amount: string
    asset: string
    token: string
    userId: string
    _id: string
}

interface IReqActionTwo {
    type: string
    coin: string
    email: string
    amount: string
    asset: string
    token: string
}

interface IResActionTwo {
    message: string
}

interface IGetOrders {
    coin: string
    chain: string
    fee: string
    address: string
    type: string
    amount: string
    asset: string
    userId: string
    action: string
    date: string
    _id: string
}

interface IGetreq {
     token: string
     type: string
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
        }),
        getBalance: builder.query<IResBalance, IReqBalance>({
            query: (obj) => {
                return {
                    url: `/${obj.asset}/${obj.coin}`,
                    method: 'GET',
                    headers: {
                        'Authorization': obj.token
                    }
                }
            }
        }),
        createOrder: builder.mutation<IResOrder, Partial<IReqOrder>>({
            query: (obj) =>{
                return {
                   url: '/order',
                   method: 'POST',
                   headers: {
                    'Authorization': obj.token
                   },
                   body: { 
                       coin: obj.coin,
                       fee: obj.fee,
                       address: obj.address,
                       type: obj.type,
                       amount: obj.amount,
                       asset: obj.asset,
                       chain: obj.chain
                    }
                }
            } 
        }),
        createOrderTwoAction: builder.mutation<IResActionTwo, Partial<IReqActionTwo>>({
            query: (obj) => {
                return {
                   url: '/order',
                   method: 'POST',
                   headers: {
                    'Authorization': obj.token
                   },
                   body: { 
                       coin: obj.coin,
                       type: obj.type,
                       amount: obj.amount,
                       asset: obj.asset,
                       email: obj.email
                    }
                }
            }
        }),
        getOrders: builder.query<IGetOrders[], IGetreq>({
            query: obj => {
                return {
                    url: `/orders/${obj.type}`,
                    method: 'GET',
                    headers: {
                        'Authorization': obj.token
                    }
                }
            }
        })
    })
})


export const { 
    useLazyGetCryptoListQuery, 
    useGetChainListMutation, 
    useLazyGetBalanceQuery, 
    useCreateOrderMutation, 
    useCreateOrderTwoActionMutation,
    useLazyGetOrdersQuery 
   } = withdrawApi

export default withdrawApi.reducer