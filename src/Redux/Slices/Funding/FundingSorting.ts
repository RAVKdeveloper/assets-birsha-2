import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store";


interface IinitialState {
    isHiddenNullBalance: boolean
    searchValue: string
}


const initialState: IinitialState = {
    isHiddenNullBalance: false,
    searchValue: ''
}


export const FundingSorting = createSlice({
    name: 'FundingSorting',
    initialState,
    reducers: {
        setIsHiddenNullBalance: (state, action: PayloadAction<boolean>) => {
            state.isHiddenNullBalance = action.payload
        },
        setSearchValue: (state, action: PayloadAction<string>) => {
            state.searchValue = action.payload
        }
    }
})


export const fundingSortingSelector = (state: RootState) => state.FundingSorting

export const { setIsHiddenNullBalance, setSearchValue } = FundingSorting.actions

export default FundingSorting.reducer