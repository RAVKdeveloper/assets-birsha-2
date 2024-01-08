import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store";


interface IinitialState {
    isOpenModalChat: boolean
    openLiveChat: boolean
    sendText: string
}


const initialState: IinitialState = {
    isOpenModalChat: false,
    openLiveChat: false,
    sendText: '',
}


export const Chat = createSlice({
    name: 'Chat',
    initialState,
    reducers: {
        setIsOpneModalChat: (state, action: PayloadAction<boolean>) => {
            state.isOpenModalChat = action.payload
        },
        setOpenLiveChat: (state, action: PayloadAction<boolean>) => {
            state.openLiveChat = action.payload
        },
        setSendText: (state, action: PayloadAction<string>) => {
            state.sendText = action.payload
        }
    }
}) 


export const chatSelector = (state: RootState) => state.Chat

export const { setIsOpneModalChat, setOpenLiveChat, setSendText } = Chat.actions

export default Chat.reducer