import React from 'react'
import style from './style.module.css'
import { setAmount, withdrawSelector } from '../../../../../../../Redux/Slices/Overview/WithdrawModal/withdrawModal'
import { useAppSelector, useAppDispatch } from '../../../../../../../Redux/Slices/hooks/hooks'
import { useLazyGetBalanceQuery } from '../../../../../../../Redux/Api/WithdrawModal/withdraw'


const AmountWithdrawInput: React.FC = () => {

    const { amount, coin, assets } = useAppSelector(withdrawSelector)
    const dispatch = useAppDispatch()
    const [ getBalance, { data } ] = useLazyGetBalanceQuery()

    const addValueAmount = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value.replace(/[a-zа-яё]/gi, '')
        dispatch(setAmount(value))
    }

    const checkBalance = async (token: string, asset: string, coin: string) => {
        const obj = {
            token,
            asset,
            coin
        } 

        await getBalance(obj).unwrap()
    }

    React.useEffect(() => {
       const token = localStorage.getItem('tokenAuth')

       if(token) {
         checkBalance(token, assets, coin.abriatur)
       }

    }, [coin, assets])

    
    const isAllBtn = Number(data?.balance) > 0 ? `${style.allBtn} ${style.active}` : style.allBtn
    
    const getAllMax = () => {
        if(Number(data?.balance) > 0 &&  data) {
            dispatch(setAmount(data.balance))
        }
    }


    return (

        <section className={style.root}>
            <div className={style.titleRow}>
                <p className={style.title}>Amount</p>
                <p className={style.valueCoin}>{data?.balance} {data?.name}</p>
            </div>
            <div className={style.inputBox}>
                <input value={amount} onChange={addValueAmount} type="text" className={style.input} />
                <span onClick={getAllMax} className={isAllBtn}>All</span>
            </div>
        </section>
    )
}

export default AmountWithdrawInput