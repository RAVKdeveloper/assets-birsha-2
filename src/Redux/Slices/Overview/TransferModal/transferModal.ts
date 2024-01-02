import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../../store";


type Coin = {
    name: string
    img: string
}


interface Iinitialstate {
    from: string
    to: string
    isOpenFrom: boolean
    isOpenTo: boolean
    coin: Coin
    isOpenCoin: boolean
    amount: string
    isErrorCurrent: boolean
}


const initialState: Iinitialstate = {
    isOpenFrom: false,
    isOpenTo: false,
    from: 'Funding',
    to: 'Spot',
    coin: { name: 'USDT', img: 'https://www.bybit.com/bycsi-root/app/assets/token/170314b1e124e4f11ac58e456264a1b7.svg' },
    isOpenCoin: false,
    amount: '',
    isErrorCurrent: false
}



export const transferModal = createSlice({
    name: 'transferModalReduser',
    initialState,
    reducers: {
       setFrom: (state, action: PayloadAction<string>) => {
         state.from = action.payload
       },
       setTo: (state, action: PayloadAction<string>) => {
         state.to = action.payload
       },
       setIsOpenFrom: (state, action: PayloadAction<boolean>) => {
         state.isOpenFrom = action.payload
       },
       setIsOpenTo: (state, action: PayloadAction<boolean>) => {
        state.isOpenTo = action.payload
      },
      setCoin: (state, action: PayloadAction<Coin>) => {
        state.coin = action.payload
      },
      setIsOpenCoin: (state, action: PayloadAction<boolean>) => {
         state.isOpenCoin = action.payload
      },
      setAmount: (state, action: PayloadAction<string>) => {
         state.amount = action.payload
      },
      setIsErrorCurrently: (state, action: PayloadAction<boolean>) => {
         state.isErrorCurrent = action.payload
      }
    }
})



export const tranfermodalSelector = (state: RootState) => state.transferModal

export const { setFrom, setTo, setIsOpenFrom, setIsOpenTo, setIsOpenCoin, setCoin, setAmount, setIsErrorCurrently } = transferModal.actions
export default transferModal.reducer