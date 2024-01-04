import React from 'react'
import style from './style.module.css'
import { LuEye } from "react-icons/lu"
import { LuEyeOff } from "react-icons/lu"
import { useAppDispatch, useAppSelector } from '../../../../Redux/Slices/hooks/hooks'
import { setOpenDepositModal, setOpenTransferModal, setWithdrawModal, setVisibleBalance } from '../../../../Redux/Slices/Overview/headModals/headModals'
import { useLazyGetFundingBalanceQuery } from '../../../../Redux/Api/AllFundingsApi/FundingApi'


const FundingHead: React.FC = () => {

    const { isVisibleBalance } = useAppSelector(state => state.headModals)
    const dispatch = useAppDispatch()
    const [ reqBalance, { isLoading, data } ] = useLazyGetFundingBalanceQuery()

    const openDeposit = () => dispatch(setOpenDepositModal(true))
    const openWithdraw = () => dispatch(setWithdrawModal(true))
    const openTransfer = () => dispatch(setOpenTransferModal(true))
    const getVisible = () => {
        if(isVisibleBalance) return dispatch(setVisibleBalance(false))

        return dispatch(setVisibleBalance(true))
    }

    const isOpenEye = isVisibleBalance ? <LuEye onClick={getVisible} className={style.eye} /> : <LuEyeOff onClick={getVisible} className={style.eye} />

    const fetchBalance = async (token: string) => {
        try{  
            await reqBalance(token).unwrap()
        } catch {
            alert('Error')
        }
    }

    React.useEffect(() => {
      const token = localStorage.getItem('tokenAuth')

      if(token) fetchBalance(token)

    }, [])

    const usdBalance = isVisibleBalance ? Number(data?.balance).toFixed(2) : '***'
    const btcBalance = isVisibleBalance ? Number(data?.btc).toFixed(6) : '***'

    return (

        <section className={style.root}>
            <div className={style.titleRow}>
                <h3 className={style.title}>Funding Account {isOpenEye}</h3>
                <div className={style.btnRow}>
                    <div onClick={openDeposit} className={style.btnAccent}>Deposit</div>
                    <div onClick={openWithdraw} className={style.btn}>Withdraw</div>
                    <div onClick={openTransfer} className={style.btn}>Transfer</div>
                    <div className={style.btn}>Convert</div>
                    <div className={style.btn}>History</div>
                </div>
            </div>
            <article className={style.balanceColumn}>
                <span className={style.titleColumn}>Total Equity</span>
                <p className={style.usdBalance}>{usdBalance} <span>USD</span></p>
                <p className={style.btcBalance}>= {btcBalance} BTC</p>
            </article>
        </section>
    )
}

export default FundingHead