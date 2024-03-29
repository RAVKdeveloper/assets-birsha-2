import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import searchHeader from './Slices/HeaderRedusers/searchHeader'
import { searchTradingPar } from './Api/searchHeaderApi'
import { authUserApi } from './Api/Auth/authUserApi'
import { createAssetsApi } from './Api/Auth/createAssetsApi'
import { globalAssetsApi } from './Api/GlobalAssetsApi/globalAssetsApi'
import { withdrawApi } from './Api/WithdrawModal/withdraw'
import { transferApi } from './Api/TransferModal/transfer'
import { FundingApi } from './Api/AllFundingsApi/FundingApi'
import { SpotApi } from './Api/AllSpotApi/SpotApi'
import headModals from './Slices/Overview/headModals/headModals'
import withdrawModal from './Slices/Overview/WithdrawModal/withdrawModal'
import transferModal from './Slices/Overview/TransferModal/transferModal'
import FundingSorting from './Slices/Funding/FundingSorting'
import SpotSorting from './Slices/Spot/SpotSorting'
import Chat from './Slices/Chat/Chat'


export const store = configureStore({
  reducer: {
    [searchTradingPar.reducerPath]: searchTradingPar.reducer,
    [authUserApi.reducerPath]: authUserApi.reducer,
    [createAssetsApi.reducerPath]: createAssetsApi.reducer,
    [globalAssetsApi.reducerPath]: globalAssetsApi.reducer,
    [withdrawApi.reducerPath]: withdrawApi.reducer,
    [transferApi.reducerPath]: transferApi.reducer,
    [FundingApi.reducerPath]: FundingApi.reducer,
    [SpotApi.reducerPath]: SpotApi.reducer,
    searchHeader,
    headModals,
    withdrawModal,
    transferModal,
    FundingSorting,
    SpotSorting,
    Chat,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat( 
    searchTradingPar.middleware, 
    authUserApi.middleware, 
    createAssetsApi.middleware,
    globalAssetsApi.middleware,
    withdrawApi.middleware,
    transferApi.middleware,
    FundingApi.middleware,
    SpotApi.middleware,
    )
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
setupListeners(store.dispatch)