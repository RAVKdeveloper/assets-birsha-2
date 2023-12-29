import React from 'react'
import style from './style.module.css'
import { useLazyGetCryptoListQuery } from '../../../../../../../../Redux/Api/WithdrawModal/withdraw'
import { useAppDispatch, useAppSelector } from '../../../../../../../../Redux/Slices/hooks/hooks'
import { withdrawSelector } from '../../../../../../../../Redux/Slices/Overview/WithdrawModal/withdrawModal'
import { setCoin } from '../../../../../../../../Redux/Slices/Overview/WithdrawModal/withdrawModal'

interface ICryptoList {
    abriatur: string
    name: string
    img: string
    _id: string
}

const CoinModal: React.FC = () => {

    const [ fetchCrypto, { isLoading } ] = useLazyGetCryptoListQuery()
    const [ list, setList ] = React.useState<ICryptoList[]>()
    const { coin, isOpen } = useAppSelector((withdrawSelector))
    const dispatch = useAppDispatch()

    const addCryptoList = async (token: string) => {
       const res = await fetchCrypto(token).unwrap()
       setList(res)
    }

    const getCoin = (abriatur: string, name: string, img: string) => {
           const obj = {
              img,
              name,
              abriatur: abriatur.toUpperCase()
           }
        dispatch(setCoin(obj))
    } 

    React.useEffect(() => {
       const token = localStorage.getItem('tokenAuth')
       if(token) {
        addCryptoList(token)
        console.log('fetch')
       }
    }, [])

    return (

        <section className={isOpen ? `${style.root} ${style.active}` : style.root}>
            {
                !isLoading && list ?
                 list.map(({ name, _id, abriatur, img }) => (
            <article onClick={() => getCoin(abriatur, name, img)} key={_id} className={coin.name === name ? `${style.card} ${style.active}` : style.card}>
                <img src={img} alt={name} className={style.icon} />
                <div className={style.column}>
                    <p className={coin.abriatur === abriatur ? `${style.abriature} ${style.active}` : style.abriature}>{abriatur}</p>
                    <p className={style.name}>{name}</p>
                </div>
            </article>
                 ))
                 :
                 <div>Loading</div>
            }
        </section>
    )
}

export default CoinModal