import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import type { TradingPar } from '../../types/types'


export const searchTradingPar = createApi({
    reducerPath: 'searchTradingPar',
    tagTypes: ['TestCrypto'],
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000/api' }),
    endpoints: (builder) => ({
      getPar: builder.query<TradingPar[], string>({
        query: (search) => `/tradingpars/${search ? `${search}` : 'all'}`,
      })
    }),
  })
  
export const { useGetParQuery } = searchTradingPar