import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../../store";

interface IinitialState {
    actionTab: string
    coin: string
}

const initialState: IinitialState = {
    actionTab: '0',
    coin: 'BTC'
}

export const withdrawModal = createSlice({
    name: 'withdrawModalReduser',
    initialState,
    reducers: {
       setActionTab: (state, action: PayloadAction<string>) => {
         state.actionTab = action.payload
       }
    }
})


export const withdrawSelector = (state: RootState) => state.withdrawModal


export const { setActionTab } = withdrawModal.actions
export default withdrawModal.reducer