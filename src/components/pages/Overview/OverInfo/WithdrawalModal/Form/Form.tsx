import React from 'react'
import style from './style.module.css'
import CoinSelect from './CoinSelect&Modal/select'
import WithdrawAddressSelect from './Address/select'
import ChainSelect from './ChainSelect&Modal/select'
import AmountWithdrawInput from './Amount/amount'
import AssetsRadioBtn from './AssetsBtn/radioBtn'
import BtnRowWithdraw from './BtnRow/row'


const FormWithdrawModal: React.FC = () => {

    return (

        <section className={style.root}>
            <CoinSelect/>
            <WithdrawAddressSelect/>
            <ChainSelect/>
            <AmountWithdrawInput/>
            <AssetsRadioBtn/>
            <BtnRowWithdraw/>
        </section>
    )
}

export default FormWithdrawModal