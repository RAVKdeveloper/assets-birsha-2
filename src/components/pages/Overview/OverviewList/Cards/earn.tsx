import React from 'react'
import style from '../style.module.css'
import earnIcon from '../../../../../assets/img/Sidebar/icons/earn.svg'

interface Props {
    isVisible: boolean
}


const EarnCard: React.FC<Props> = ({ isVisible }) => {

    return (

        <article className={style.card}>
        <div className={style.content}>
            <div className={style.iconAssetBody}>
            <img src={earnIcon} alt="Earn" className={style.iconAsset} />
            </div>
            <p className={style.asset}>Earn</p>
        </div>
        <div className={style.balance}>
            <p className={style.usd}>{isVisible ? 0 : '***'} USD</p>
            <p className={style.btc}>= {isVisible ? 0 : '***'} BTC</p>
        </div>
    </article>
    )
}

export default EarnCard