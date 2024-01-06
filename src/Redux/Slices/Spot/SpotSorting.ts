import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store";



interface Iinitialstate {
    isVisbleNullBalance: boolean
    searchValue: string
}


const initialState: Iinitialstate = {
    isVisbleNullBalance: false,
    searchValue: '',
}


export const SpotSorting = createSlice({
    name: 'SpotSorting',
    initialState,
    reducers: {
        setIsVisibleNullBalance: (state, action: PayloadAction<boolean>) => {
            state.isVisbleNullBalance = action.payload
        },
        setSearchValue: (state, action: PayloadAction<string>) => {
            state.searchValue = action.payload
        }
    }
}) 



export const spotSortingSelector = (state: RootState) => state.SpotSorting

export const { setIsVisibleNullBalance, setSearchValue } = SpotSorting.actions

export default SpotSorting.reducer