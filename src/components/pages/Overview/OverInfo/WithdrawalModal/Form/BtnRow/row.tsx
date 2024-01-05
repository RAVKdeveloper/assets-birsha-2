import React from 'react'
import style from './style.module.css'
import { useAppSelector } from '../../../../../../../Redux/Slices/hooks/hooks'
import { withdrawSelector } from '../../../../../../../Redux/Slices/Overview/WithdrawModal/withdrawModal'
import { useCreateOrderMutation, useCreateOrderTwoActionMutation } from '../../../../../../../Redux/Api/WithdrawModal/withdraw'


const BtnRowWithdraw: React.FC = () => {

    const { coin, assets, actionTab, address, amount, chain ,email } = useAppSelector(withdrawSelector)
    const [ submit, setSubmit ] = React.useState<boolean>(false)
    const [ submitTypeTwo, setSubmitTypeTwo ] = React.useState<boolean>(false)
    const [ addOrder ] = useCreateOrderMutation()
    const [ addOrderActionTwo ] = useCreateOrderTwoActionMutation()

    React.useEffect(() => {

        if(actionTab === '0') {
            const isTrue = address !== '' && amount !== '' && chain.name !== ''
           if(isTrue) {
              setSubmit(true)
           } else {
              setSubmit(false)
           }
        } else if(actionTab === '1') {
            const isTrue = email !== '' && amount !== ''
            if(isTrue) {
                setSubmitTypeTwo(true)
            } else {
                setSubmitTypeTwo(false)
            }
        }
    }, [coin, assets, actionTab, address, amount, chain, email])

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
                alert('Withdraw complete')
            } else if(token && actionTab === '1') {
                const obj = {
                    type: actionTab,
                    coin: coin.abriatur,
                    email,
                    amount,
                    asset: assets,
                    token
                }

                await addOrderActionTwo(obj).unwrap()

                alert('Withdraw complete')
            }
        } catch (e: any) {
            alert(e.data.message)
        }
    }

    return (

        <section className={style.root}>
            <div className={style.feeBody}>
                <p className={style.title}>Transaction Fee</p>
                {
                    actionTab === '0' ?
                    <p className={style.fee}>{chain.fee}</p>
                    :
                    <p className={style.fee}>0 {coin.abriatur}</p>
                }
            </div>
            {
                actionTab === '0' ?
                <button onClick={fetchOrder} disabled={!submit} className={submit ? style.btn : `${style.btn} ${style.dis}`}>Submit</button>
                :
                <button onClick={fetchOrder} disabled={!submitTypeTwo} className={submitTypeTwo ? style.btn : `${style.btn} ${style.dis}`}>Submit</button>
            }
        </section>
    )
}

export default BtnRowWithdraw