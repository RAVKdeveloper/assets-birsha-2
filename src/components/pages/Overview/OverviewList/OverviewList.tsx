import React from 'react'
import style from './style.module.css'
import FundingCard from './Cards/funding'
import { setOpenDepositModal, setOpenTransferModal, setWithdrawModal } from '../../../../Redux/Slices/Overview/headModals/headModals'
import { useAppDispatch, useAppSelector } from '../../../../Redux/Slices/hooks/hooks'
import SpotCard from './Cards/spot'
import DerivativesCard from './Cards/derivatives'
import USDCDerCard from './Cards/usdcDer'
import EarnCard from './Cards/earn'
import LendingCard from './Cards/lending'

const OverviewList: React.FC = () => {

    const { isVisibleBalance } = useAppSelector(state => state.headModals)
    const dispatch = useAppDispatch()

    const openModal = {
        deposit: () => dispatch(setOpenDepositModal(true)),
        withdraw: () => dispatch(setWithdrawModal(true)),
        transfer: () => dispatch(setOpenTransferModal(true))
    }

    return (

        <section className={style.root}>
            <h5 className={style.title}>My Assets</h5>
            <div className={style.cardsColumn}>
                <FundingCard isOpens={openModal} isVisible={isVisibleBalance} />
                <SpotCard isOpens={openModal} isVisible={isVisibleBalance} />
                <DerivativesCard isOpens={openModal} isVisible={isVisibleBalance} />
                <USDCDerCard isOpens={openModal} isVisible={isVisibleBalance} />
            <h5 className={style.subtitle}>Invested Products</h5>
                <EarnCard isVisible={isVisibleBalance} />
                <LendingCard isVisible={isVisibleBalance} />
            </div>
        </section>
    )
}

export default OverviewList