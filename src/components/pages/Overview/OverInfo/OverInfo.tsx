import { FC, useEffect } from 'react'
import { LuEye } from "react-icons/lu"
import { LuEyeOff } from "react-icons/lu"
import OverviewBalanceMainLoader from './Skeletons/Skeleton'
import style from './style.module.css'
import DepositModal from './DepositModal/modal'
import { setOpenDepositModal, setVisibleBalance, setWithdrawModal, setOpenTransferModal } from '../../../../Redux/Slices/Overview/headModals/headModals'
import { useAppDispatch, useAppSelector } from '../../../../Redux/Slices/hooks/hooks'
import { useLazyGetOverviewQuery } from '../../../../Redux/Api/GlobalAssetsApi/globalAssetsApi'
import { useLocaleStorage } from '../../../../utils/localstorageHook'
import WithdrawModal from './WithdrawalModal/modal'
import TransferModal from './TransferModal/modal'


const OverInfoOverwiev: FC = () => {

    const token = useLocaleStorage('tokenAuth', 'get')
    const [ fetchOverwiev, { data, isLoading, isError } ] = useLazyGetOverviewQuery()
    const { isVisibleBalance } = useAppSelector(state => state.headModals)
    const dispatch = useAppDispatch()

    if(isError) alert('Произошла ошибка, повторите позже')

    const chekBalance = async (token: string) => {
        await fetchOverwiev(token).unwrap()
    } 

    useEffect(() => {
        if(token) {
           chekBalance(token)
        }
    }, [token])

    
    const openModalDeposit = () => dispatch(setOpenDepositModal(true))
    const openWithdrawModal = () => dispatch(setWithdrawModal(true))
    const openTransferModal = () => dispatch(setOpenTransferModal(true))

    const addOpenEyeBalance = () => {
        if(isVisibleBalance) return dispatch(setVisibleBalance(false))

        return dispatch(setVisibleBalance(true))
    }


    const isEye = isVisibleBalance 
    ? 
    <LuEye className={style.eye} onClick={addOpenEyeBalance} /> 
    : 
    <LuEyeOff className={style.eye} onClick={addOpenEyeBalance} />

    return (

        <section className={style.root}>
            <div className={style.balanceColumn}>
                <p className={style.title}>Assets Overview {isEye}</p>
                {
                    !isLoading ? 
                    <>
                     <p className={style.balance}>{isVisibleBalance ? Number(data?.balance).toFixed(2) : '***'} <span>USD</span></p>
                     <p className={style.balanceBtc}>= {isVisibleBalance ? Number(data?.btc).toFixed(6) : '***'} <span>BTC</span></p>   
                    </>
                    :
                    <OverviewBalanceMainLoader/>
                }
            </div>
            <div className={style.btnRow}>
                <div onClick={openModalDeposit} className={style.btnOrange}>Deposit</div>
                <div onClick={openWithdrawModal} className={style.btnTransperant}>Withdraw</div>
                <div onClick={openTransferModal} className={style.btnTransperant}>Transfer</div>
                <div className={style.btnTransperant}>Convert</div>
            </div>
            <DepositModal/>
            <WithdrawModal/>
            <TransferModal/>
        </section>
    )
}

export default OverInfoOverwiev