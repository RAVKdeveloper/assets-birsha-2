import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store";


interface IinitialState {
    isOpenModalChat: boolean
}


const initialState: IinitialState = {
    isOpenModalChat: false
}


export const Chat = createSlice({
    name: 'Chat',
    initialState,
    reducers: {
        setIsOpneModalChat: (state, action: PayloadAction<boolean>) => {
            state.isOpenModalChat = action.payload
        }
    }
}) 


export const chatSelector = (state: RootState) => state.Chat

export const { setIsOpneModalChat } = Chat.actions

export default Chat.reducer