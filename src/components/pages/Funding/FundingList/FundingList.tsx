import React from 'react'
import style from './style.module.css'
import { useAppDispatch, useAppSelector } from '../../../../Redux/Slices/hooks/hooks'
import { setOpenDepositModal, setOpenTransferModal, setWithdrawModal } from '../../../../Redux/Slices/Overview/headModals/headModals'
import { useLazyGetCoinsQuery } from '../../../../Redux/Api/AllFundingsApi/FundingApi'
import { fundingSortingSelector } from '../../../../Redux/Slices/Funding/FundingSorting'


const FundingList: React.FC = () => {

    const { searchValue, isHiddenNullBalance } = useAppSelector(fundingSortingSelector)
    const dispatch = useAppDispatch()
    const [ reqCoins, { data, isLoading } ] = useLazyGetCoinsQuery()
 
    const openDeposit = () => dispatch(setOpenDepositModal(true))
    const openWithdraw = () => dispatch(setWithdrawModal(true))
    const openTransfer = () => dispatch(setOpenTransferModal(true))

    const fetchCoinsList = async (token: string) => {
        try{ 
           await reqCoins({ token, search: searchValue }).unwrap()
        } catch {
            alert('Error')
        }
    }

    React.useEffect(() => {
        const token = localStorage.getItem('tokenAuth')

        if(token) fetchCoinsList(token)

    }, [searchValue])

 
    const isVisibleBalance = isHiddenNullBalance ? data?.filter(({ balance }) => Number(balance) > 0.00) : data?.filter(el => true)

    return (

        <section className={style.root}>
            <div className={style.tableHeadRow}>
                <p className={style.cointitle}>Coin</p>
                <p className={style.alltitle}>All</p>
                <p className={style.avaibletitle}>Available Balance</p>
                <p className={style.avaibletitle}>Frozen</p>
                <p className={style.avaibletitle}>Equivalent</p>
                <p className={style.actiontitle}>Action</p>
            </div>
            {
               !isLoading && data && isVisibleBalance && 
               isVisibleBalance.map(({ name, fullname, _id, balance, img }) => (
                 <article key={_id} className={style.card}>
                 <div className={style.left}>
                    <div className={style.iconAndNameColumn}>
                        <img src={img} alt={fullname} className={style.icon} />
                        <div className={style.colunmn}>
                            <span className={style.abriatur}>{name}</span>
                            <span className={style.name}>{fullname}</span>
                        </div>
                    </div>
                    <div className={style.balanceColumnAll}>{balance}</div>
                    <div className={style.balanceColumn}>{balance}</div>
                    <div className={style.balanceColumn}>{balance}</div>
                    <div className={style.balanceColumn}>{balance}</div>
                 </div>
                 <div className={style.right}>
                    <span onClick={openDeposit} className={style.action}>Deposit</span>
                    <span onClick={openWithdraw} className={style.action}>Withdraw</span>
                    <span className={style.action}>Buy</span>
                    <span className={style.action}>Earn</span>
                    <span onClick={openTransfer} className={style.action}>Transfer</span>
                    <span className={style.action}>Sell</span>
                 </div>
                 </article>
               ))
            }
        </section>
    )
}

export default FundingList