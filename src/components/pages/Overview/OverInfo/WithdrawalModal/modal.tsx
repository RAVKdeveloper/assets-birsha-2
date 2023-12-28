import React from 'react'
import style from './style.module.css'
import { IoMdClose } from "react-icons/io";


const WithdrawModal: React.FC = () => {

    return (

        <section className={style.root}>
            <div className={style.modal}>
                <div className={style.titleRow}>
                    <h5 className={style.title}>Withdraw</h5>
                    <div className={style.rightRowTitle}>
                        <div className={style.fiatWithdraw}>Fiat Withdrawal</div>
                        <IoMdClose className={style.close} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default WithdrawModal