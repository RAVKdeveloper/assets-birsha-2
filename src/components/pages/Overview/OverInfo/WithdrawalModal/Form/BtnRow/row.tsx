import React from 'react'
import style from './style.module.css'
import { useAppSelector } from '../../../../../../../Redux/Slices/hooks/hooks'
import { withdrawSelector } from '../../../../../../../Redux/Slices/Overview/WithdrawModal/withdrawModal'
import { useCreateOrderMutation } from '../../../../../../../Redux/Api/WithdrawModal/withdraw'


const BtnRowWithdraw: React.FC = () => {

    const { coin, assets, actionTab, address, amount, chain } = useAppSelector(withdrawSelector)
    const [ submit, setSubmit ] = React.useState<boolean>(false)
    const [ addOrder ] = useCreateOrderMutation()

    React.useEffect(() => {

        const isTrue = address !== '' && amount !== '' && chain.name !== ''
       if(isTrue) {
          setSubmit(true)
       } else {
          setSubmit(false)
       }
    }, [coin, assets, actionTab, address, amount, chain])

    const fetchOrder = async () => {
        try{
            const token = localStorage.getItem('tokenAuth')
    
            if(token && actionTab === '0') {
                const fee = chain.fee?.replace(/[a-zа-яё]/gi, '')
                const obj = {
                    type: actionTab,
                    coin: coin.abriatur,
                    fee: fee,
                    chain: chain.name,
                    asset: assets,
                    address,
                    amount,
                    token
                }
    
                await addOrder(obj).unwrap()
    
                setSubmit(false)
            } else if(token && actionTab === '1') {
                const obj = {
                    type: actionTab,
                    coin: coin.abriatur,
                    email: '',
                    amount,
                    asset: assets,
                    token
                }
            }
        } catch {
            alert('Недостаточно средств')
        }
    }

    return (

        <section className={style.root}>
            <div className={style.feeBody}>
                <p className={style.title}>Transaction Fee</p>
                <p className={style.fee}>{chain.fee}</p>
            </div>
            <button onClick={fetchOrder} disabled={!submit} className={submit ? style.btn : `${style.btn} ${style.dis}`}>Submit</button>
        </section>
    )
}

export default BtnRowWithdraw