import React from 'react'
import style from './style.module.css'
import iconOne from '../../../../assets/img/HelpChat/Faq/p2p.png'
import deposit from '../../../../assets/img/HelpChat/Faq/deposit.png'
import express from '../../../../assets/img/HelpChat/Faq/express.png'


const SelfServingModal: React.FC = () => {

    return (

        <section className={style.root}>
            <p className={style.title}>Self-Service</p>
            <div className={style.content}>
                <article className={style.card}>
                    <img src={iconOne} alt="" className={style.icon} />
                    <span className={style.cardName}>Submit case</span>
                </article>
                <article className={style.card}>
                    <img src={deposit} alt="" className={style.icon} />
                    <span className={style.cardName}>My Deposit Hasn't Arrived</span>
                </article>
                <article className={style.card}>
                    <img src={deposit} alt="" className={style.icon} />
                    <span className={style.cardName}>Crypto Deposit/Withdrawal Platform Status</span>
                </article>
                <article className={style.card}>
                    <img src={express} alt="" className={style.icon} />
                    <span className={style.cardName}>P2P Order Dispute</span>
                </article>
            </div>
            <button className={style.btn}>View All</button>
        </section>
    )
}

export default SelfServingModal