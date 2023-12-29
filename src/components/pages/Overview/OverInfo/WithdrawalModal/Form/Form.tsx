import React from 'react'
import style from './style.module.css'
import CoinSelect from './CoinSelect&Modal/select'
import WithdrawAddressSelect from './Address/select'
import ChainSelect from './ChainSelect&Modal/select'


const FormWithdrawModal: React.FC = () => {

    return (

        <section className={style.root}>
            <CoinSelect/>
            <WithdrawAddressSelect/>
            <ChainSelect/>
        </section>
    )
}

export default FormWithdrawModal