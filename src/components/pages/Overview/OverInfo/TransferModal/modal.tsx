import React from 'react'
import style from './style.module.css'
import FormTransferModal from './Form/form';

import { IoMdClose } from "react-icons/io";
import { useAppDispatch, useAppSelector } from '../../../../../Redux/Slices/hooks/hooks';
import { setOpenTransferModal } from '../../../../../Redux/Slices/Overview/headModals/headModals';


const TransferModal: React.FC = () => {

    const { openTransferModal } = useAppSelector(state => state.headModals)
    const dispatch = useAppDispatch()

    const closeModal = () => dispatch(setOpenTransferModal(false))

    const isOpenClass = openTransferModal ? `${style.root} ${style.active}` : style.root

    return (

        <section className={isOpenClass}>
            <div className={style.modal}>
                <div className={style.titleRow}>
                    <p className={style.title}>Transfer</p>
                    <IoMdClose onClick={closeModal} className={style.close} />
                </div>
                <FormTransferModal/>
            </div>
        </section>
    )
}

export default TransferModal