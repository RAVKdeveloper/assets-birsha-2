import React from 'react'
import style from './style.module.css'
import { setAmount, tranfermodalSelector, setIsErrorCurrently } from '../../../../../../../Redux/Slices/Overview/TransferModal/transferModal'
import { useAppDispatch, useAppSelector } from '../../../../../../../Redux/Slices/hooks/hooks'
import { useLazyGetBalanceQuery } from '../../../../../../../Redux/Api/TransferModal/transfer'


const AmountInputTransferModal: React.FC = () => {

    const { amount, coin, from, isErrorCurrent } = useAppSelector(tranfermodalSelector)
    const dispatch = useAppDispatch()
    const [ reqBalance, { isLoading, data } ] = useLazyGetBalanceQuery()


    const getValueAmount = (str: string) => {
         const value = str.replace(/[a-zа-яё]/gi, '')

         dispatch(setAmount(value))
    } 

    const fetchBalance = async (token: string) => {
        try{
            const obj = {
               coin: coin.name,
               asset: from,
               token
            } 
   
          await reqBalance(obj).unwrap()
        } catch (e: any) {
            alert('Что-то пошло не так')
        }
    }

    React.useEffect(() => {
       const token = localStorage.getItem('tokenAuth')

       if(token) fetchBalance(token)

    }, [coin, from])

    React.useEffect(() => {
        if(Number(data?.balance) < Number(amount)) { 
            dispatch(setIsErrorCurrently(true))
        } else{
            dispatch(setIsErrorCurrently(false))
        }
    }, [amount])

    const clickAllhandeler = () => {
        if(data) dispatch(setAmount(data.balance))
    }

    return (

        <section className={style.root}>
            <h6 className={style.title}>Amount</h6>
            <div className={isErrorCurrent ? `${style.inputBox} ${style.error}` : style.inputBox}>
                <input value={amount} onChange={(e) => getValueAmount(e.target.value)} type="text" className={style.input} />
                <div className={style.btnRow}>
                    <p onClick={clickAllhandeler} className={style.btnAll}>All</p>
                    <p className={style.coinName}>{coin.name}</p>
                </div>
            </div>
            {
                isErrorCurrent &&
                <p className={style.error}>Insufficient wallet balance. Please enter again.</p>
            }
            <div className={style.balanceinfoRow}>
                <p className={style.subtitle}>Transferable Amount</p>
                <p className={style.balance}>{data?.balance} {coin.name}</p>
            </div>
        </section>
    )
}

export default AmountInputTransferModal