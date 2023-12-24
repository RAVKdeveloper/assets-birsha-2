import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import type { TradingPar } from '../../types/types'


export const searchTradingPar = createApi({
    reducerPath: 'searchTradingPar',
    tagTypes: ['TestCrypto'],
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000/api' }),
    endpoints: (builder) => ({
      getPar: builder.query<TradingPar[], string>({
        query: (search) => `/tradingpars${search ? `?allPar=${search}` : ''}`,
      }),
      // addProduct: builder.mutation<TradingPar, Partial<TradingPar>>({
      //   query: (body) => {
      //      return{
      //         url: 'cryptolist',
      //         method: 'POST',
      //         body
      //      }
      //   },
      //   invalidatesTags: [{ type: 'TestCrypto', id: 'LIST' }]
      // })
    }),
  })
  
export const { useGetParQuery } = searchTradingPar