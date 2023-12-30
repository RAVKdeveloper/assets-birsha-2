import React from 'react'
import style from './style.module.css'
import { IoMdArrowDropdown } from "react-icons/io";
import { setIsOpenChain } from '../../../../../../../Redux/Slices/Overview/WithdrawModal/withdrawModal';
import { useAppSelector, useAppDispatch } from '../../../../../../../Redux/Slices/hooks/hooks';
import { withdrawSelector } from '../../../../../../../Redux/Slices/Overview/WithdrawModal/withdrawModal';
import ModalChainWithdraw from './modal';


const ChainSelect: React.FC = () => {

    const { isOpenChain, chain } = useAppSelector(withdrawSelector)
    const dispatch = useAppDispatch()
    const selectRef = React.useRef<HTMLDivElement>(null)

    const openModal = () => {
        if(isOpenChain) return dispatch(setIsOpenChain(false))

        return dispatch(setIsOpenChain(true))
    }

    const closeModal = (e: Event) => {
        if(e.target !== selectRef.current) {
             dispatch(setIsOpenChain(false))
        }
    }

    React.useEffect(() => {
       window.addEventListener('click', closeModal)

       return () => {
         window.removeEventListener('click', closeModal)
       }
    }, [])

    return (

        <section className={style.root}>
            <h6 className={style.title}>Chain Type</h6>
            <div ref={selectRef} onClick={openModal} className={isOpenChain ? `${style.select} ${style.active}` : style.select}>
                <p className={style.name}>{chain.name}</p>
                <IoMdArrowDropdown className={isOpenChain ? `${style.arrow} ${style.active}` : style.arrow} />
             </div>
             <ModalChainWithdraw/>
        </section>
    )
}

export default ChainSelect