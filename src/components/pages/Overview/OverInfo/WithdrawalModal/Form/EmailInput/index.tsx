import React from 'react'
import style from './style.module.css'
import { useAppSelector, useAppDispatch } from '../../../../../../../Redux/Slices/hooks/hooks'
import { withdrawSelector } from '../../../../../../../Redux/Slices/Overview/WithdrawModal/withdrawModal'
import { setEmail } from '../../../../../../../Redux/Slices/Overview/WithdrawModal/withdrawModal'


const EmailInputWithdraw: React.FC = () => {

    const { email } = useAppSelector(withdrawSelector)
    const dispatch = useAppDispatch()



    return (

        <section className={style.root}>
            <h6 className={style.title}>Recipient Account</h6>
            <p className={style.badge}>Email Address</p>
            <input onChange={e => dispatch(setEmail(e.target.value))} value={email} type="text" className={style.input} placeholder='Please enter' />
        </section>
    )
}

export default EmailInputWithdraw