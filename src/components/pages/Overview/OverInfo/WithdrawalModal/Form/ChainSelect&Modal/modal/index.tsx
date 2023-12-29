import React from 'react'
import style from './style.module.css'
import { useGetChainListMutation } from '../../../../../../../../Redux/Api/WithdrawModal/withdraw'
import { useAppSelector } from '../../../../../../../../Redux/Slices/hooks/hooks'
import { withdrawSelector } from '../../../../../../../../Redux/Slices/Overview/WithdrawModal/withdrawModal'


const ModalChainWithdraw: React.FC = () => {

    const [ addChain, { data, isLoading } ] = useGetChainListMutation()
    const { coin } = useAppSelector(withdrawSelector)

    const fetchChain = async (token: string, coin: string) => {

        const obj = {
            token,
            coin
        }

        await addChain(obj).unwrap()
    }

    React.useEffect(() => {
       const token = localStorage.getItem('tokenAuth')

       if(token) fetchChain(token, coin.abriatur)

    }, [coin])

    return (
        
        <section className={style.root}>
            {
                !isLoading && data ? 
                data.map((obj) => (
            <article key={obj?._id} className={style.card}>
                <p className={style.name}>{obj?.name}</p>
                <p className={style.fees}>fee: {obj?.fees} {obj?.coin}</p>
            </article>
            ))
            :
            null
            }
        </section>
    )
}

export default ModalChainWithdraw