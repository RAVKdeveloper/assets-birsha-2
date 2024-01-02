import React from 'react'
import style from './style.module.css'
import { useLazyGetCoinsQuery } from '../../../../../../../../Redux/Api/TransferModal/transfer'
import { useAppDispatch, useAppSelector } from '../../../../../../../../Redux/Slices/hooks/hooks'
import { tranfermodalSelector } from '../../../../../../../../Redux/Slices/Overview/TransferModal/transferModal'
import { setCoin } from '../../../../../../../../Redux/Slices/Overview/TransferModal/transferModal'


const CoinModalTransferModal: React.FC = () => {

    const [ reqCoins, { isLoading, data } ] = useLazyGetCoinsQuery()
    const { coin, isOpenCoin } = useAppSelector(tranfermodalSelector)
    const dispatch = useAppDispatch()


    const fetchCoins = async (token: string) => {
          await reqCoins(token).unwrap()
    }

    const refreshCoin = (name: string, img: string) => {
         const obj = {
            name,
            img
         }

         dispatch(setCoin(obj))
    }

    React.useEffect(() => {
       const token = localStorage.getItem('tokenAuth')

       if(token) fetchCoins(token)

    }, [])
 
    return (

        <section className={isOpenCoin ? `${style.root} ${style.active}` : style.root}>
            {
            !isLoading && data ? 
              data.map(({ _id, name, img, abriatur }) => (
           <article onClick={() => refreshCoin(abriatur.toUpperCase(), img)} key={_id} className={style.card}>
              <img src={img} alt={name} className={style.icon} />
              <span className={coin.name === abriatur ? `${style.abriatur} ${style.active}` : style.abriatur}>{abriatur}</span>
              <span className={style.name}>{name}</span>
           </article>
              ))
            :
            null
            }
        </section>
    )
}

export default CoinModalTransferModal