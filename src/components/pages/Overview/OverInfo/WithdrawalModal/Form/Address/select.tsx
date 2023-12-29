import React from 'react'
import style from './style.module.css'
import { useAppSelector, useAppDispatch } from '../../../../../../../Redux/Slices/hooks/hooks'
import { withdrawSelector } from '../../../../../../../Redux/Slices/Overview/WithdrawModal/withdrawModal'
import { setAddress } from '../../../../../../../Redux/Slices/Overview/WithdrawModal/withdrawModal'


const WithdrawAddressSelect: React.FC = () => {

    const { address } = useAppSelector(withdrawSelector)
    const dispatch = useAppDispatch()

    return (

        <section className={style.root}>
            <div className={style.titleRow}>
                <p className={style.title}>Wallet Address</p>
                <p className={style.link}>Add</p>
            </div>
            <input value={address} onChange={e => dispatch(setAddress(e.target.value))} type="text" className={style.input} placeholder='Please enter' />
        </section>
    )
}

export default WithdrawAddressSelect