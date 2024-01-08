import React from 'react'
import style from './style.module.css'
import { IoClose } from "react-icons/io5";
import logo from '../../../assets/img/HelpChat/Chat/logo.svg'
import ContentChatModal from './Content/content';
import SendFieldChatModal from './TextField';
import { setOpenLiveChat } from '../../../Redux/Slices/Chat/Chat';
import { useAppDispatch } from '../../../Redux/Slices/hooks/hooks';


const LiveChat: React.FC = () => {

    const ws = new WebSocket('ws://localhost:8080/')
    const dispatch = useAppDispatch()

    const closeModal = () => dispatch(setOpenLiveChat(false))

    return (

        <section className={style.root}>
            <div className={style.titleRow}>
                <div className={style.logoAndTitle}>
                    <img src={logo} alt="ravk" className={style.logo} />
                    <span className={style.title}>Bybit Live Chat</span>
                </div>
                <div onClick={closeModal} className={style.closeBody}>
                    <IoClose className={style.close} />
                </div>
            </div>
            <ContentChatModal socket={ws} />
            <SendFieldChatModal socket={ws} />
        </section>
    )
}

export default LiveChat