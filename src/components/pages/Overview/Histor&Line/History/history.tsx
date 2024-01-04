import React from 'react'
import style from './style.module.css'
import { useLazyGetOrdersQuery } from '../../../../../Redux/Api/WithdrawModal/withdraw';
import { FaArrowRight } from "react-icons/fa";


const HistoryOrdersOverview: React.FC = () => {

    const [ reqOrders, { isLoading, data } ] = useLazyGetOrdersQuery()


    const fetchOrders = async (token: string) => {
        try{
            
            const obj = {
                token,
                type: 'four'
            }

           await reqOrders(obj).unwrap()
        } catch {
            alert('Error')
        }
    }

    React.useEffect(() => {
        const token = localStorage.getItem('tokenAuth')

        if(token) fetchOrders(token)

    }, [])

    return (

        <section className={style.root}>
            <h5 className={style.titleRow}>
                <p className={style.title}>Recent Deposit & Withdrawal History</p>
                <p className={style.linkAll}>All <FaArrowRight className={style.arrow} /></p>
            </h5>
            <div className={style.container}>
                {
                    !isLoading && data &&
                    data.map(({ date, _id, coin, amount, action }) => (
                <article key={_id} className={style.card}>
                    <div className={style.content}>
                        <p className={style.action}>{action === 'plus' ? 'Deposit' : 'Withdraw'}</p>
                        <p className={style.date}>{date?.substring(0, 10)}</p>
                    </div>
                    <div className={style.column}>
                        <p className={action === 'plus' ? style.value : `${style.value} ${style.minus}`}>{action === 'plus' ? `+ ${amount}` : `- ${amount}`} {coin}</p>
                        <p className={style.status}>Complete</p>
                    </div>
                </article>
                    )) 
                }
            </div>
        </section>
    )
}

export default HistoryOrdersOverview