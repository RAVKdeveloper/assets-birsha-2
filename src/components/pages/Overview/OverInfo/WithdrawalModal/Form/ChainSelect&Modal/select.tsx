import React from 'react'
import style from './style.module.css'
import { IoMdArrowDropdown } from "react-icons/io";
import { setIsOpenChain } from '../../../../../../../Redux/Slices/Overview/WithdrawModal/withdrawModal';
import { useAppSelector, useAppDispatch } from '../../../../../../../Redux/Slices/hooks/hooks';
import { withdrawSelector } from '../../../../../../../Redux/Slices/Overview/WithdrawModal/withdrawModal';
import ModalChainWithdraw from './modal';


const ChainSelect: React.FC = () => {

    const { isOpenChain } = useAppSelector(withdrawSelector)
    const dispatch = useAppDispatch()

    const openModal = () => {
        if(isOpenChain) return dispatch(setIsOpenChain(false))

        return dispatch(setIsOpenChain(true))
    }

    return (

        <section className={style.root}>
            <h6 className={style.title}>Chain Type</h6>
            <div onClick={openModal} className={isOpenChain ? `${style.select} ${style.active}` : style.select}>
                <IoMdArrowDropdown className={isOpenChain ? `${style.arrow} ${style.active}` : style.arrow} />
             </div>
             <ModalChainWithdraw/>
        </section>
    )
}

export default ChainSelect