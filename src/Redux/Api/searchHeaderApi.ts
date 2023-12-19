import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import type { GEtRespones, Test } from '../../types/types'
import { url } from 'inspector'


export const testRequest = createApi({
    reducerPath: 'testRequest',
    tagTypes: ['TestCrypto'],
    baseQuery: fetchBaseQuery({ baseUrl: 'https://654f4fed358230d8f0cd31a4.mockapi.io/ravk/' }),
    endpoints: (builder) => ({
      getTestRequest: builder.query<GEtRespones, string>({
        query: () => `cryptolist`,
      }),
      addProduct: builder.mutation<Test, Partial<Test>>({
        query: (body) => {
           return{
              url: 'cryptolist',
              method: 'POST',
              body
           }
        },
        invalidatesTags: [{ type: 'TestCrypto', id: 'LIST' }]
      })
    }),
  })
  
export const { useGetTestRequestQuery, useAddProductMutation } = testRequest