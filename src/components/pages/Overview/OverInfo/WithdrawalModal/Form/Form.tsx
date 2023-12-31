import React from 'react'
import style from './style.module.css'
import CoinSelect from './CoinSelect&Modal/select'
import WithdrawAddressSelect from './Address/select'
import ChainSelect from './ChainSelect&Modal/select'
import AmountWithdrawInput from './Amount/amount'
import AssetsRadioBtn from './AssetsBtn/radioBtn'
import BtnRowWithdraw from './BtnRow/row'
import EmailInputWithdraw from './EmailInput'
import { useAppSelector } from '../../../../../../Redux/Slices/hooks/hooks'
import { withdrawSelector } from '../../../../../../Redux/Slices/Overview/WithdrawModal/withdrawModal'


const FormWithdrawModal: React.FC = () => {

    const { actionTab } = useAppSelector(withdrawSelector)

    return (

        <section className={style.root}>
            {
                actionTab === '0' ? 
                <>
                <CoinSelect/>
                <WithdrawAddressSelect/>
                <ChainSelect/>
                <AmountWithdrawInput/>
                <AssetsRadioBtn/>
                <BtnRowWithdraw/>
                </>
                :
                <>
                <CoinSelect/>
                <EmailInputWithdraw/>
                <AmountWithdrawInput/>
                <AssetsRadioBtn/>
                <BtnRowWithdraw/>
                </>
            }
        </section>
    )
}

export default FormWithdrawModal