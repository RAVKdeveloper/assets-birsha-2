import React from 'react'
import style from './style.module.css'
import { useAppDispatch, useAppSelector } from '../../../../../../../../Redux/Slices/hooks/hooks'
import { tranfermodalSelector, setTo, setIsOpenTo } from '../../../../../../../../Redux/Slices/Overview/TransferModal/transferModal'


const ToAssetTransferModal: React.FC = () => {

    const arr = ['Spot', 'Derivatives', 'Funding', 'USDC Derivatives']
    
    const { to, isOpenTo, from } = useAppSelector(tranfermodalSelector)
    const dispatch = useAppDispatch()

    const closeAndgetTo = (str: string) => {
         dispatch(setTo(str))
         dispatch(setIsOpenTo(false))
    } 

    return (

        <section className={isOpenTo ? `${style.root} ${style.active}` : style.root}>
        {
            arr.filter(el => el !== from).map((el, i) => (
                <article onClick={() => closeAndgetTo(el)} key={i} className={to === el ? `${style.card} ${style.active}` : style.card}>
                <p className={style.name}>{el}</p>
             </article>
            ))
        }
        </section>
    )
}

export default ToAssetTransferModal