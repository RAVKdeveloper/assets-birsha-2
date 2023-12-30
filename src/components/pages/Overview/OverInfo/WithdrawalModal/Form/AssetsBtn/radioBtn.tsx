import React from 'react'
import style from './style.module.css'
import { useAppDispatch, useAppSelector } from '../../../../../../../Redux/Slices/hooks/hooks'
import { setAssets, withdrawSelector } from '../../../../../../../Redux/Slices/Overview/WithdrawModal/withdrawModal'


const AssetsRadioBtn: React.FC = () => {

    const { assets } = useAppSelector(withdrawSelector)
    const dispatch = useAppDispatch()

    const addSpot = () => dispatch(setAssets('Spot'))
    const addFunding = () => dispatch(setAssets('Funding'))

    return (

        <section className={style.root}>
            <div className={style.row}>
                <div onClick={addSpot} className={style.content}>
                    <div className={assets === 'Spot' ? `${style.radioBtn} ${style.active}` : style.radioBtn}></div>
                    <p className={style.asset}>Spot</p>
                </div>
                <p className={style.balance}>Asset</p>
            </div>
            <div className={style.row}>
                <div onClick={addFunding} className={style.content}>
                    <div className={assets === 'Funding' ? `${style.radioBtn} ${style.active}` : style.radioBtn}></div>
                    <p className={style.asset}>Funding</p>
                </div>
                <p className={style.balance}>Asset</p>
            </div>
        </section>
    )
}

export default AssetsRadioBtn