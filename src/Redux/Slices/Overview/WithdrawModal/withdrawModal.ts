import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../../store";

type Coin = {
    img: string
    name: string
    abriatur: string
}

type Chain = {
    name: string | undefined
    fee: string  | undefined
}

interface IinitialState {
    actionTab: string
    coin: Coin
    isOpen: boolean
    isOpenChain: boolean
    address: string
    chain: Chain
    amount: string
    assets: string
}

const initialState: IinitialState = {
    actionTab: '0',
    coin: {
       name: 'Bitcoin',
       img: 'https://www.bybit.com/bycsi-root/app/assets/token/d9c8c35b4223b50d9773d7d5294d019f.svg',
       abriatur: 'BTC'
    },
    isOpen: false,
    isOpenChain: false,
    address: '',
    chain: { name: '', fee: '' },
    amount: '',
    assets: 'Spot'
}

export const withdrawModal = createSlice({
    name: 'withdrawModalReduser',
    initialState,
    reducers: {
       setActionTab: (state, action: PayloadAction<string>) => {
         state.actionTab = action.payload
       },
       setCoin: (state, action: PayloadAction<Coin>) => {
         state.coin = action.payload
       },
       setIsOpen: (state, action: PayloadAction<boolean>) => {
         state.isOpen = action.payload
       },
       setAddress: (state, action: PayloadAction<string>) => {
         state.address = action.payload
       },
       setIsOpenChain: (state, action: PayloadAction<boolean>) => {
        state.isOpenChain = action.payload
       },
       setChain: (state, action: PayloadAction<Chain>) => {
        state.chain = action.payload
       },
       setAmount: (state, action: PayloadAction<string>) => {
        state.amount = action.payload
       },
       setAssets: (state, action: PayloadAction<string>) => {
        state.assets = action.payload
       }
    }
})


export const withdrawSelector = (state: RootState) => state.withdrawModal


export const { setActionTab, setCoin, setIsOpen, setAddress, setIsOpenChain, setChain, setAmount, setAssets } = withdrawModal.actions
export default withdrawModal.reducer