import React from 'react'
import style from './style.module.css'
import { useAppDispatch, useAppSelector } from '../../../../../../../../Redux/Slices/hooks/hooks'
import { setFrom, tranfermodalSelector, setIsOpenFrom } from '../../../../../../../../Redux/Slices/Overview/TransferModal/transferModal'


const FromAssetModalTransfer: React.FC = () => {

    const arr = ['Spot', 'Derivatives', 'Funding', 'USDC Derivatives']

    const { from, isOpenFrom, to } = useAppSelector(tranfermodalSelector)
    const dispatch = useAppDispatch()

    const closeAndgetFrom = (str: string) => {
        dispatch(setFrom(str))
        dispatch(setIsOpenFrom(false))
    }
 
    return (

        <section className={isOpenFrom ? `${style.root} ${style.active}` : style.root}>
            {
                arr.filter(el => el !== to).map((el, i) => (
             <article onClick={() => closeAndgetFrom(el)} key={i} className={from === el ? `${style.card} ${style.active}` : style.card}>
                <p className={style.name}>{el}</p>
                <p className={style.fee}>Available 0 USDT</p>
             </article>
                ))
            }
        </section>
    )
}

export default FromAssetModalTransfer