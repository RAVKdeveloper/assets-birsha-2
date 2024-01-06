import React from 'react'
import style from './style.module.css'
import { useAppDispatch, useAppSelector } from '../../../../Redux/Slices/hooks/hooks'
import { setOpenDepositModal, setOpenTransferModal, setWithdrawModal } from '../../../../Redux/Slices/Overview/headModals/headModals'
import { useLazyGetCoinListQuery } from '../../../../Redux/Api/AllSpotApi/SpotApi'
import { spotSortingSelector } from '../../../../Redux/Slices/Spot/SpotSorting'


const SpotCoinList: React.FC = () => {

    const { searchValue, isVisbleNullBalance } = useAppSelector(spotSortingSelector)
    const { isVisibleBalance } = useAppSelector(state => state.headModals)
    const dispatch = useAppDispatch()
    const [ reqCoins, { isLoading, data } ] = useLazyGetCoinListQuery()

    const openDeposit = () => dispatch(setOpenDepositModal(true))
    const openWithdraw = () => dispatch(setWithdrawModal(true))
    const openTransfer = () => dispatch(setOpenTransferModal(true))

    const fetchCoinsList = async (token: string) => {
        try{ 
           await reqCoins({ token, searchValue }).unwrap()
        } catch (e) {
            alert('Error')
        }
    }

    React.useEffect(() => {
        const token = localStorage.getItem('tokenAuth')

        if(token) fetchCoinsList(token)

    }, [searchValue])


    const isVisibleBalanceCoin = isVisbleNullBalance ? data?.filter(({ balance }) => Number(balance) > 0.00) : data?.filter(el => true)

    return (

        <section className={style.root}>
             <div className={style.tableHeadRow}>
                <p className={style.cointitle}>Coin</p>
                <p className={style.alltitle}>Wallet Balance</p>
                <p className={style.avaibletitle}>Available Balance</p>
                <p className={style.avaibletitle}>Amount Frozen</p>
                <p className={style.avaibletitle}>Equivalent</p>
                <p className={style.actiontitle}>Action</p>
            </div>
            {
                !isLoading && data && isVisibleBalanceCoin ?
                isVisibleBalanceCoin.map(({ balance, _id, name, fullname, img }) => (
                  <article key={_id} className={style.card}>
                 <div className={style.left}>
                    <div className={style.iconAndNameColumn}>
                        <img src={img} alt={fullname} className={style.icon} />
                        <div className={style.colunmn}>
                            <span className={style.abriatur}>{name}</span>
                            <span className={style.name}>{fullname}</span>
                        </div>
                    </div>
                    <div className={style.balanceColumnAll}>{isVisibleBalance ? balance : '***'}</div>
                    <div className={style.balanceColumn}>{isVisibleBalance ? balance : '***'}</div>
                    <div className={style.balanceColumn}>{isVisibleBalance ? balance : '***'}</div>
                    <div className={style.balanceColumn}>{isVisibleBalance ? balance : '***'}</div>
                 </div>
                 <div className={style.right}>
                    <span onClick={openDeposit} className={style.action}>Deposit</span>
                    <span onClick={openWithdraw} className={style.action}>Withdraw</span>
                    <span className={style.action}>Transfer</span>
                    <span className={style.action}>Trade</span>
                    <span onClick={openTransfer} className={style.action}>Lend</span>
                    <span className={style.action}>Convert</span>
                 </div>
                 </article>   
                ))
                :
                <div className={style.loader}></div>
            }
        </section>
    )
}

export default SpotCoinList