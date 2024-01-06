import React from 'react'
import style from './style.module.css'
import Sidebar from '../../sidebar/Sidebar'
import BannerSpot from './Banner/banner'
import SpotHead from './SpotHead/SpotHead'
import DepositModal from '../Overview/OverInfo/DepositModal/modal'
import WithdrawModal from '../Overview/OverInfo/WithdrawalModal/modal'
import TransferModal from '../Overview/OverInfo/TransferModal/modal'
import SpotSorting from './SpotSorting/SpotSorting'
import SpotCoinList from './SpotCoinList/SpotCoinList'


const SpotPage: React.FC = () => {

    return (

        <>
          <Sidebar/>
          <main className={style.root}>
            <BannerSpot/>
            <SpotHead/>
            <SpotSorting/>
            <SpotCoinList/>
          </main>
          <DepositModal/>
          <WithdrawModal/>
          <TransferModal/>
        </>
    )
}

export default SpotPage