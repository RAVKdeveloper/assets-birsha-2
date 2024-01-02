import React from 'react'
import style from '../style.module.css'
import derIcon from '../../../../../assets/img/Sidebar/icons/derivateves.svg'
import { IoWalletOutline } from "react-icons/io5";
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


const DerivativesCard: React.FC<Props> = ({ isVisible, isOpens }) => {

    return (

        <article className={style.card}>
        <div className={style.content}>
            <div className={style.iconAssetBody}>
            <img src={derIcon} alt="Derivatives" className={style.iconAsset} />
            </div>
            <p className={style.asset}>Derivatives</p>
        </div>
        <div className={style.balance}>
            <p className={style.usd}>{isVisible ? 0 : '***'} USD</p>
            <p className={style.btc}>= {isVisible ? 0 : '***'} BTC</p>
        </div>
        <div className={style.actions}>
            <div onClick={isOpens.deposit} className={style.iconBodyAction}>
                <IoWalletOutline className={style.iconAction} />
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

export default DerivativesCard