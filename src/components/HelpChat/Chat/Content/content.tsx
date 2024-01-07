import React from 'react'
import style from './style.module.css'
import logo from '../../../../assets/img/HelpChat/Chat/logo.svg'


const ContentChatModal: React.FC = () => {

    return (

        <section className={style.root}>
            <div className={style.preChat}>
                 <img src={logo} alt="logo" className={style.logo} />
                 <p className={style.pretitle}>Bybit Live Chat </p>
                 <p className={style.pretext}>Providing 24/7 instant responses whenever you need</p>
            </div>
            <div className={style.openDate}>Today</div>
            <div className={style.msgBody}>
                <article className={style.message}>
                    <img src={logo} alt="msgUser" className={style.userIcon} />
                    <div className={style.msgText}>
                    Welcome to Bybit Live Chat Service! 🙂
                    </div>
                </article>
                <article className={style.message}>
                    <img src={logo} alt="msgUser" className={style.userIcon} />
                    <div className={style.msgText}>
                    I'm here to help! Just type what you need assistance with
                    </div>
                </article>
            </div>
        </section>
    )
}

export default ContentChatModal