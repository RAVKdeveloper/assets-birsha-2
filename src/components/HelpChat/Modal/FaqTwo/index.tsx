import React from 'react'
import style from './style.module.css'
import { IoIosArrowForward } from "react-icons/io";


const FaqTwoModal: React.FC = () => {

    return (

        <section className={style.root}>
            <p className={style.title}>FAQ</p>
            <div className={style.content}>
                <p className={style.link}>Account Matters <IoIosArrowForward className={style.arrow} /></p>
                <p className={style.link}>Crypto Deposits/Withdrawals <IoIosArrowForward className={style.arrow} /></p>
                <p className={style.link}>Buy Crypto <IoIosArrowForward className={style.arrow} /></p>
                <p className={style.link}>P2P Trading <IoIosArrowForward className={style.arrow} /></p>
                <p className={style.link}>Unified Trading Account <IoIosArrowForward className={style.arrow} /></p>
                <p className={style.link}>Derivatives Trading <IoIosArrowForward className={style.arrow} /></p>
                <p className={style.link}>Spot & Margin Trading <IoIosArrowForward className={style.arrow} /></p>
                <p className={style.link}>Copy Trading <IoIosArrowForward className={style.arrow} /></p>

            </div>
        </section>
    )
}

export default FaqTwoModal