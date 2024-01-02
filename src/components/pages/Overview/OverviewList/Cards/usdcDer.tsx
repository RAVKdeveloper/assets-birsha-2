import React from 'react'
import style from '../style.module.css'
import usdcIcon from '../../../../../assets/img/Sidebar/icons/usdcderivatives.svg'
import { TbTransfer } from "react-icons/tb";


interface IisOpen {
    deposit: () => { payload: boolean; type: "headModalsOverwiev/setOpenDepositModal"; },
    withdraw: () => { payload: boolean; type: "headModalsOverwiev/setWithdrawModal"; },
    transfer: () => { payload: boolean; type: "headModalsOverwiev/setOpenTransferModal"; }
}

interface Props {
    isOpens: IisOpen
    isVisible: boolean
}


const USDCDerCard: React.FC<Props> = ({ isVisible, isOpens }) => {

    return (
    
        <article className={style.card}>
        <div className={style.content}>
            <div className={style.iconAssetBody}>
            <img src={usdcIcon} alt="Derivatives" className={style.iconAsset} />
            </div>
            <p className={style.asset}>Derivatives</p>
        </div>
        <div className={style.balance}>
            <p className={style.usd}>{isVisible ? 0 : '***'} USD</p>
            <p className={style.btc}>= {isVisible ? 0 : '***'} BTC</p>
        </div>
        <div className={style.actions}>
            <div onClick={isOpens.transfer} className={style.iconBodyAction}>
                <TbTransfer className={style.iconAction} />
            </div> 
        </div>
    </article>
    )
}

export default USDCDerCard