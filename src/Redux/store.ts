import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import searchHeader from './Slices/HeaderRedusers/searchHeader'
import { searchTradingPar } from './Api/searchHeaderApi'
import { authUserApi } from './Api/Auth/authUserApi'


export const store = configureStore({
  reducer: {
    searchHeader,
    [searchTradingPar.reducerPath]: searchTradingPar.reducer,
    [authUserApi.reducerPath]: authUserApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat( searchTradingPar.middleware, authUserApi.middleware)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
setupListeners(store.dispatch)