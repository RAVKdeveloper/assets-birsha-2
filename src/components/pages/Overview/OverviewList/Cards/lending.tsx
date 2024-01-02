import React from 'react'
import style from '../style.module.css'
import icon from '../../../../../assets/img/Sidebar/icons/lending.svg'
import { IoIosArrowForward } from "react-icons/io";


interface Props {
    isVisible: boolean
}


const LendingCard: React.FC<Props> = ({ isVisible }) => {

    const tetherIcon = 'https://www.bybit.com/bycsi-root/app/assets/token/170314b1e124e4f11ac58e456264a1b7.svg'

    return (

        <article className={style.card}>
        <div className={style.content}>
            <div className={style.iconAssetBody}>
            <img src={icon} alt="Lending" className={style.iconAsset} />
            </div>
            <p className={style.asset}>Lending</p>
        </div>
        <div className={style.balance}>
            <p className={style.usd}>{isVisible ? 0 : '***'} USD</p>
            <p className={style.btc}>= {isVisible ? 0 : '***'} BTC</p>
        </div>
        <div className={style.LinkBody}>
            <img src={tetherIcon} alt="USDT" className={style.iconLink} />
            <span className={style.nameLink}>USDT</span>
            <span className={style.procent}>12.93 %</span>
            <IoIosArrowForward className={style.arrow} />
        </div>
    </article>
    )
}

export default LendingCard