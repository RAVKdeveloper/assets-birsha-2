import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type searchHeaderType ={
    searchVal: string
}

const initialState: searchHeaderType = {
    searchVal: ''
}

export const searchHeader = createSlice({
    name: 'searchHeader',
    initialState,
    reducers: {
        setSearchVal: (state, action: PayloadAction<string>) => {
            state.searchVal = action.payload
        }
    }
})

export const { setSearchVal } = searchHeader.actions;
export default searchHeader.reducer;