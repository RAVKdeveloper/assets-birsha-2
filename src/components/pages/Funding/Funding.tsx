import React from 'react'
import style from './style.module.css'
import Sidebar from '../../sidebar/Sidebar'
import FundingHead from './FundingHead/FundingHead'
import DepositModal from '../Overview/OverInfo/DepositModal/modal'
import WithdrawModal from '../Overview/OverInfo/WithdrawalModal/modal'
import TransferModal from '../Overview/OverInfo/TransferModal/modal'
import FundingFilter from './Filter/FundingFilter'


const FundingPage: React.FC = () => {

    return (

        <>
        <Sidebar/>
        <main className={style.root}>
           <FundingHead/>
           <FundingFilter/>
        </main>
        <DepositModal/>
        <WithdrawModal/>
        <TransferModal/>
        </>
    )
}

export default FundingPage