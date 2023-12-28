import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Iinitialstate {
    isVisibleBalance: boolean
    openDepositModal: boolean
}

const initialState: Iinitialstate = {
    isVisibleBalance: true,
    openDepositModal: false
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
        }
    }
})


export const { setOpenDepositModal, setVisibleBalance } = headModalsOverview.actions

export default headModalsOverview.reducer