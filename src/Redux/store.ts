import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import searchHeader from './Slices/HeaderRedusers/searchHeader'
import { searchTradingPar } from './Api/searchHeaderApi'
import { userBasicInfo } from './Api/userBasicApi'

export const store = configureStore({
  reducer: {
    searchHeader,
    [searchTradingPar.reducerPath]: searchTradingPar.reducer,
    [userBasicInfo.reducerPath]: userBasicInfo.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(searchTradingPar.middleware, userBasicInfo.middleware)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
setupListeners(store.dispatch)