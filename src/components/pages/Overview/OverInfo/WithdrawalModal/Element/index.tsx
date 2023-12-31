import React from 'react'
import style from './style.module.css'


const ManageLimitWithdraw: React.FC = () => {

    return (
        <section className={style.root}>
            <p className={style.title}>Daily Remaining Limit</p>
            <p className={style.value}>1,000,000/1,000,000 USDT</p>
            <p className={style.manageLink}>Manage Limit</p>
            <p className={style.more}>Please click here to know more</p>
        </section>
    )
}

export default ManageLimitWithdraw