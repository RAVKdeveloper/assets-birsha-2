import React from 'react'
import style from './style.module.css'
import { IoMdClose } from "react-icons/io";
import { useAppDispatch, useAppSelector } from '../../../../../Redux/Slices/hooks/hooks';  
import { setActionTab, withdrawSelector } from '../../../../../Redux/Slices/Overview/WithdrawModal/withdrawModal';
import { setWithdrawModal } from '../../../../../Redux/Slices/Overview/headModals/headModals';
import FormWithdrawModal from './Form/Form';
import ManageLimitWithdraw from './Element';


const WithdrawModal: React.FC = () => {

    const { openWithdrawModal } = useAppSelector(state => state.headModals)
    const { actionTab } = useAppSelector(withdrawSelector)
    const dispatch = useAppDispatch()

    const tabsArr = [
        {
            id: 1,
            type: 'On-chain Withdrawal',
            action: '0'
        },
        {
            id: 2,
            type: 'Internal Transfer',
            action: '1'
        }
    ]

    const closeModal = () => dispatch(setWithdrawModal(false))

    return (

        <section className={openWithdrawModal ? `${style.root} ${style.visible}` : style.root}>
            <div className={style.modal}>
                <div className={style.titleRow}>
                    <h5 className={style.title}>Withdraw</h5>
                    <div className={style.rightRowTitle}>
                        <div className={style.fiatWithdraw}>Fiat Withdrawal</div>
                        <IoMdClose onClick={closeModal} className={style.close} />
                    </div>
                </div>
                <div className={style.content}>
                    <div className={style.form}>
                        <div className={style.tabs}>
                            {
                                tabsArr.map(({ id, type, action }) => (
                                    <p onClick={() => dispatch(setActionTab(action))} key={id} className={actionTab === action ? `${style.tab} ${style.active}` : style.tab}>{type}</p>
                                ))
                            }
                        </div>
                        <FormWithdrawModal/>
                    </div>
                    <ManageLimitWithdraw/>
                </div>
            </div>
        </section>
    )
}

export default WithdrawModal