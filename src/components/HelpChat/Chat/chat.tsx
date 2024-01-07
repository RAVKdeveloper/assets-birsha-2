import React from 'react'
import style from './style.module.css'
import { IoClose } from "react-icons/io5";
import logo from '../../../assets/img/HelpChat/Chat/logo.svg'
import ContentChatModal from './Content/content';
import SendFieldChatModal from './TextField';


const LiveChat: React.FC = () => {

    return (

        <section className={style.root}>
            <div className={style.titleRow}>
                <div className={style.logoAndTitle}>
                    <img src={logo} alt="ravk" className={style.logo} />
                    <span className={style.title}>Bybit Live Chat</span>
                </div>
                <div className={style.closeBody}>
                    <IoClose className={style.close} />
                </div>
            </div>
            <ContentChatModal/>
            <SendFieldChatModal/>
        </section>
    )
}

export default LiveChat