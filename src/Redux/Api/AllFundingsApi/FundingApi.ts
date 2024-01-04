import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


interface IReqFunding {
    balance: string
    btc: string
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
        })
    })
})


export const { useLazyGetFundingBalanceQuery } = FundingApi

export default FundingApi.reducer