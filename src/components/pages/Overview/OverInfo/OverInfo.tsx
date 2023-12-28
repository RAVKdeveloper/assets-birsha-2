import { FC } from 'react'
import { LuEye } from "react-icons/lu"
import { LuEyeOff } from "react-icons/lu"
import OverviewBalanceMainLoader from './Skeletons/Skeleton'
import style from './style.module.css'
import DepositModal from './DepositModal/modal'
import { setOpenDepositModal, setVisibleBalance } from '../../../../Redux/Slices/Overview/headModals/headModals'
import { useAppDispatch, useAppSelector } from '../../../../Redux/Slices/hooks/hooks'
import { useGetOverviewQuery } from '../../../../Redux/Api/GlobalAssetsApi/globalAssetsApi'
import { useLocaleStorage } from '../../../../utils/localstorageHook'
import WithdrawModal from './WithdrawalModal/modal'


const OverInfoOverwiev: FC = () => {

    const token = useLocaleStorage('tokenAuth', 'get')
    const { data, isLoading, isError  } = useGetOverviewQuery(token ? token : '')
    const { isVisibleBalance } = useAppSelector(state => state.headModals)
    const dispatch = useAppDispatch()


    if(isError) alert('Произошла ошибка, повторите позже')
    
    const openModalDeposit = () => dispatch(setOpenDepositModal(true))

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
                     <p className={style.balance}>{isVisibleBalance ? data?.balance : '***'} <span>USD</span></p>
                     <p className={style.balanceBtc}>= {isVisibleBalance ? data?.btc : '***'} <span>BTC</span></p>   
                    </>
                    :
                    <OverviewBalanceMainLoader/>
                }
            </div>
            <div className={style.btnRow}>
                <div onClick={openModalDeposit} className={style.btnOrange}>Deposit</div>
                <div className={style.btnTransperant}>Withdraw</div>
                <div className={style.btnTransperant}>Transfer</div>
                <div className={style.btnTransperant}>Convert</div>
            </div>
            <DepositModal/>
            <WithdrawModal/>
        </section>
    )
}

export default OverInfoOverwiev