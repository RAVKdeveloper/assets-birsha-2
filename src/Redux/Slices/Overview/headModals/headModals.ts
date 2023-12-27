import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Iinitialstate {
    openDepositModal: boolean
}

const initialState: Iinitialstate = {
    openDepositModal: false
}


export const headModalsOverview = createSlice({
    name: 'headModalsOverwiev',
    initialState,
    reducers: {
        setOpenDepositModal: (state, action: PayloadAction<boolean>) => {
            state.openDepositModal = action.payload
        }
    }
})


export const { setOpenDepositModal } = headModalsOverview.actions

export default headModalsOverview.reducer