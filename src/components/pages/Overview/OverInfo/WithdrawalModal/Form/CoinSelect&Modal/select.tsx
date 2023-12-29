import React from 'react'
import style from './style.module.css'
import CoinModal from './modal';
import { IoMdArrowDropdown } from "react-icons/io";
import { useAppSelector, useAppDispatch } from '../../../../../../../Redux/Slices/hooks/hooks';
import { withdrawSelector } from '../../../../../../../Redux/Slices/Overview/WithdrawModal/withdrawModal';
import { setIsOpen } from '../../../../../../../Redux/Slices/Overview/WithdrawModal/withdrawModal';


const CoinSelect: React.FC = () => {

    const { coin, isOpen } = useAppSelector(withdrawSelector)
    const dispatch = useAppDispatch()
    const selectRef = React.useRef<HTMLDivElement>(null)

    const openModal = () => {
        if(isOpen) return dispatch(setIsOpen(false))
        return dispatch(setIsOpen(true))
    }

    const closeModal = (e: Event) => {
        if(e.target !== selectRef.current) {
            dispatch(setIsOpen(false))
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
            <div className={style.titleRow}>
                <p className={style.title}>Coin</p>
                <p className={style.link}>Convert</p>
            </div>
            <div ref={selectRef} onClick={openModal} className={style.select}>
                <div className={style.content}>
                    <img src={coin.img} alt={coin.name} className={style.icon} />
                    <p className={style.abriatur}>{coin.abriatur}</p>
                    <p className={style.name}>{coin.name}</p>
                </div>
                <IoMdArrowDropdown className={isOpen ? `${style.arrow} ${style.active}` : style.arrow} />
            </div>
            <CoinModal/>
        </section>
    )
}

export default CoinSelect