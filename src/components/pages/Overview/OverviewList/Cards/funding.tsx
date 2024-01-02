import React, { FC } from 'react';
import style from './../style.module.css'
import { useLazyGetAssetQuery } from '../../../../../Redux/Api/GlobalAssetsApi/globalAssetsApi';
import fundingicon from '../../../../../assets/img/Sidebar/icons/funding.svg'
import { IoWalletOutline } from "react-icons/io5";
import { FaArrowRightFromBracket } from "react-icons/fa6";
import { TbTransfer } from "react-icons/tb";
import { RiCopperCoinLine } from "react-icons/ri";

interface IisOpen {
    deposit: () => { payload: boolean; type: "headModalsOverwiev/setOpenDepositModal"; },
    withdraw: () => { payload: boolean; type: "headModalsOverwiev/setWithdrawModal"; },
    transfer: () => { payload: boolean; type: "headModalsOverwiev/setOpenTransferModal"; }
}

interface Props {
    isOpens: IisOpen
    isVisible: boolean
}

const FundingCard: React.FC<Props> = ({ isOpens, isVisible })  => {

    const [ reqAsset, { data } ] = useLazyGetAssetQuery()

    const fetchAsset = async (token: string, asset: string) => {
        try{
            const obj = { token, asset }

            await reqAsset(obj).unwrap()
        } catch {
            alert('Error')
        }
    }

    React.useEffect(() => {
       const token = localStorage.getItem('tokenAuth')

       if(token) fetchAsset(token, 'Funding')
    }, [])

    return (

        <article className={style.card}>
        <div className={style.content}>
            <div className={style.iconAssetBody}>
            <img src={fundingicon} alt="Funding" className={style.iconAsset} />
            </div>
            <p className={style.asset}>Funding</p>
        </div>
        <div className={style.balance}>
            <p className={style.usd}>{isVisible ? data?.balance : '***'} USD</p>
            <p className={style.btc}>= {isVisible ? data?.btc : '***'} BTC</p>
        </div>
        <div className={style.actions}>
            <div onClick={isOpens.deposit} className={style.iconBodyAction}>
                <IoWalletOutline className={style.iconAction} />
            </div>
            <div onClick={isOpens.withdraw} className={style.iconBodyAction}>
                <FaArrowRightFromBracket className={style.withdrawAction} />
            </div> 
            <div onClick={isOpens.transfer} className={style.iconBodyAction}>
                <TbTransfer className={style.iconAction} />
            </div> <div className={style.iconBodyAction}>
                <RiCopperCoinLine className={style.iconAction} />
            </div>
        </div>
    </article>
    )
}

export default FundingCard