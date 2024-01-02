import React from 'react'
import style from './style.module.css'
import CoinModalTransferModal from './modal/modal';
import { IoMdArrowDropdown } from "react-icons/io";
import { useAppDispatch, useAppSelector } from '../../../../../../../Redux/Slices/hooks/hooks';
import { tranfermodalSelector } from '../../../../../../../Redux/Slices/Overview/TransferModal/transferModal';
import { setIsOpenCoin } from '../../../../../../../Redux/Slices/Overview/TransferModal/transferModal';


const CoinSelectTransferModal: React.FC = () => {

    const { coin, isOpenCoin } = useAppSelector(tranfermodalSelector)
    const dispatch = useAppDispatch()
    const selectRef = React.useRef<HTMLDivElement>(null)

    const openModal = () => {
        if(isOpenCoin) return dispatch(setIsOpenCoin(false))

        return dispatch(setIsOpenCoin(true))
    }

    const closeModal = (e: Event) => {
       if(e.target !== selectRef.current) dispatch(setIsOpenCoin(false)) 
    }

    React.useEffect(() => {
        window.addEventListener('click', closeModal)

        return () => {
        window.removeEventListener('click', closeModal)
        }
    }, [])

    return (

        <section className={style.root}>
            <p className={style.title}>Coin</p>
            <div ref={selectRef} onClick={openModal} className={isOpenCoin ? `${style.select} ${style.active}` : style.select}>
                <div className={style.content}>
                    <img src={coin.img} alt={coin.name} className={style.icon} />
                    <p className={style.name}>{coin.name}</p>
                </div>
                <IoMdArrowDropdown className={isOpenCoin ? `${style.arrow} ${style.active}` : style.arrow} />
            </div>
            <CoinModalTransferModal/>
        </section>
    )
}

export default CoinSelectTransferModal