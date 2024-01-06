import React from 'react'
import style from './style.module.css'
import { LuEye, LuEyeOff } from "react-icons/lu"
import { IoIosArrowForward } from "react-icons/io";
import linkIcon from '../../../../assets/img/Spot/linkBanner.svg'
import tetherIcon from '../../../../assets/img/Spot/tetherIcon.svg'
import { setOpenDepositModal, setOpenTransferModal, setWithdrawModal, setVisibleBalance } from '../../../../Redux/Slices/Overview/headModals/headModals';
import { useAppSelector, useAppDispatch } from '../../../../Redux/Slices/hooks/hooks';
import { useLazyGetBalanceQuery } from '../../../../Redux/Api/AllSpotApi/SpotApi';


const SpotHead: React.FC = () => {

    const { isVisibleBalance } = useAppSelector(state => state.headModals)
    const dispatch = useAppDispatch()
    const [ reqBalance, { isLoading, data } ] = useLazyGetBalanceQuery()


    const openDeposit = () => dispatch(setOpenDepositModal(true))
    const openWitdraw = () => dispatch(setWithdrawModal(true))
    const openTransfer = () => dispatch(setOpenTransferModal(true))
    
    const getVisibleBalance = () => {
        if(isVisibleBalance) return dispatch(setVisibleBalance(false))

        return dispatch(setVisibleBalance(true))
    }

    const fetchBalance = async (token: string) => {
        try{
            await reqBalance(token).unwrap()
        } catch (e: any) {
             alert(e.data.message)
        }
    }

    React.useEffect(() => {
        const token = localStorage.getItem('tokenAuth')

        if(token) fetchBalance(token)

    }, [])

    const usdBalance = isVisibleBalance ? Number(data?.balance).toFixed(2) : '***'
    const btcBalance = isVisibleBalance ? Number(data?.btc).toFixed(6) : '***'

    const isOpenEye = isVisibleBalance ? <LuEye onClick={getVisibleBalance} className={style.eye} /> : <LuEyeOff onClick={getVisibleBalance} className={style.eye} />

    return (

        <section className={style.root}>
            <div className={style.titleRow}>
                <h2 className={style.title}>Spot {isOpenEye}</h2>
                <div className={style.btnRow}>
                    <p onClick={openDeposit} className={style.btnActive}>Deposit</p>
                    <p onClick={openWitdraw} className={style.btn}>Withdraw</p>
                    <p onClick={openTransfer} className={style.btn}>Transfer</p>
                    <p className={style.btn}>Convert</p>
                    <p className={style.btn}>History</p>
                    <p className={style.btn}>Orders</p>
                </div>
            </div>
            <div className={style.columnRow}>
                <article className={style.column}>
                    <p className={style.titleColumn}>Total Equity</p>
                    <p className={style.usdValue}>{usdBalance} <span>USD</span></p>
                    <p className={style.btcValue}>= {btcBalance}</p>
                </article>
                <article className={style.column}>
                    <p className={style.titleColumn}>Available Balance</p>
                    <p className={style.usdValue}>{usdBalance} <span>USD</span></p>
                    <p className={style.btcValue}>= {btcBalance}</p>
                </article>
            </div>
            <div className={style.linkBannerRow}>
                <img src={linkIcon} alt="link" className={style.linkIcon} />
                <span className={style.linkName}>Lending</span>
                <img src={tetherIcon} alt="Tether" className={style.tetherIcon} />
                <span className={style.cryptoLink}>USDT</span>
                <p className={style.procents}>3.19%</p>
                <IoIosArrowForward className={style.arrow} />
            </div>
        </section>
    )
}

export default SpotHead