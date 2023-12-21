import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import type { GEtResponesTradingPar, TradingPar } from '../../types/types'


export const searchTradingPar = createApi({
    reducerPath: 'searchTradingPar',
    tagTypes: ['TestCrypto'],
    baseQuery: fetchBaseQuery({ baseUrl: 'https://654f4fed358230d8f0cd31a4.mockapi.io/ravk/' }),
    endpoints: (builder) => ({
      getPar: builder.query<GEtResponesTradingPar, string>({
        query: () => `cryptolist`,
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