import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import searchHeader from './Slices/HeaderRedusers/searchHeader'
import { testRequest } from './Api/searchHeaderApi'

export const store = configureStore({
  reducer: {
    searchHeader,
    [testRequest.reducerPath]: testRequest.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(testRequest.middleware)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
setupListeners(store.dispatch)