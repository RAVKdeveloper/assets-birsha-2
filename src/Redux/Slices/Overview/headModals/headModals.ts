import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Iinitialstate {
    isVisibleBalance: boolean
    openDepositModal: boolean
    openWithdrawModal: boolean
    openTransferModal: boolean
}

const initialState: Iinitialstate = {
    isVisibleBalance: true,
    openDepositModal: false,
    openWithdrawModal: false,
    openTransferModal: false
}


export const headModalsOverview = createSlice({
    name: 'headModalsOverwiev',
    initialState,
    reducers: {
        setOpenDepositModal: (state, action: PayloadAction<boolean>) => {
            state.openDepositModal = action.payload
        },
        setVisibleBalance: (state, action: PayloadAction<boolean>) => {
             state.isVisibleBalance = action.payload
        },
        setWithdrawModal: (state, action: PayloadAction<boolean>) => {
             state.openWithdrawModal = action.payload
        },
        setOpenTransferModal: (state, action: PayloadAction<boolean>) => {
             state.openTransferModal = action.payload
        }
    }
})


export const { setOpenDepositModal, setVisibleBalance, setWithdrawModal, setOpenTransferModal } = headModalsOverview.actions

export default headModalsOverview.reducer