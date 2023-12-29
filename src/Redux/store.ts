import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import searchHeader from './Slices/HeaderRedusers/searchHeader'
import { searchTradingPar } from './Api/searchHeaderApi'
import { authUserApi } from './Api/Auth/authUserApi'
import { createAssetsApi } from './Api/Auth/createAssetsApi'
import { globalAssetsApi } from './Api/GlobalAssetsApi/globalAssetsApi'
import { withdrawApi } from './Api/WithdrawModal/withdraw'
import headModals from './Slices/Overview/headModals/headModals'
import withdrawModal from './Slices/Overview/WithdrawModal/withdrawModal'


export const store = configureStore({
  reducer: {
    [searchTradingPar.reducerPath]: searchTradingPar.reducer,
    [authUserApi.reducerPath]: authUserApi.reducer,
    [createAssetsApi.reducerPath]: createAssetsApi.reducer,
    [globalAssetsApi.reducerPath]: globalAssetsApi.reducer,
    [withdrawApi.reducerPath]: withdrawApi.reducer,
    searchHeader,
    headModals,
    withdrawModal,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat( 
    searchTradingPar.middleware, 
    authUserApi.middleware, 
    createAssetsApi.middleware,
    globalAssetsApi.middleware,
    withdrawApi.middleware,
    )
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
setupListeners(store.dispatch)