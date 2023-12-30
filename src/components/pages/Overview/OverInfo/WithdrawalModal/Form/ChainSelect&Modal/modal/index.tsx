import React from 'react'
import style from './style.module.css'
import { useGetChainListMutation } from '../../../../../../../../Redux/Api/WithdrawModal/withdraw'
import { useAppDispatch, useAppSelector } from '../../../../../../../../Redux/Slices/hooks/hooks'
import { withdrawSelector } from '../../../../../../../../Redux/Slices/Overview/WithdrawModal/withdrawModal'
import { setChain } from '../../../../../../../../Redux/Slices/Overview/WithdrawModal/withdrawModal'


const ModalChainWithdraw: React.FC = () => {

    const [ addChain, { data, isLoading } ] = useGetChainListMutation()
    const { isOpenChain, chain, coin } = useAppSelector(withdrawSelector)
    const dispatch = useAppDispatch()

    const fetchChain = async (token: string, coin: string) => {

        const obj = {
            token,
            coin
        }

        await addChain(obj).unwrap()
    }

    React.useEffect(() => {
       const token = localStorage.getItem('tokenAuth')

       if(token) { 
        dispatch(setChain({ name: '', fee: '' }))
        fetchChain(token, coin.abriatur) 
       }

    }, [coin])

    const getChainSelect = (name: string | undefined, fee: string | undefined) => {
          const obj = {
            name,
            fee
          }

          if(name !== undefined && fee !== undefined) {
              dispatch(setChain(obj))
          }
    }

    return (
        
        <section className={isOpenChain ? `${style.root} ${style.active}` : style.root}>
            {
                !isLoading && data ? 
                data.map((obj) => (
            <article onClick={() => getChainSelect(obj?.name, obj?.fees)} key={obj?._id} className={chain.name === obj?.name ? `${style.card} ${style.active}` : style.card}>
                <p className={chain.name === obj?.name ? `${style.name} ${style.active}` : style.name}>{obj?.name}</p>
                <p className={style.fees}>fee: {obj?.fees}</p>
            </article>
            ))
            :
            <div className={style.empty}>Loading...</div>
            }
        </section>
    )
}

export default ModalChainWithdraw