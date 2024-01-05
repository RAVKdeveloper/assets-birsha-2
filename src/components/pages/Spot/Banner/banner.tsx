import React from 'react'
import style from './style.module.css'
import mainIcon from '../../../../assets/img/Spot/banner3.png'
import bannerone from '../../../../assets/img/Spot/banner1.svg'
import bannertwo from '../../../../assets/img/Spot/banner2.svg'


const BannerSpot: React.FC = () => {

    return (

        <section className={style.root}>
            <div className={style.right}>
                <img src={mainIcon} alt="" className={style.icon} />
                <div className={style.column}>
                    <p className={style.title}>Upgrade to Unified Trading</p>
                    <p className={style.subtitle}>Earn a shot at the 10,000 USDT ultimate prize!</p>
                </div>
            </div>
            <div className={style.btnRow}>
                <div className={style.btn}>View Details</div>
                <div className={style.btnActive}>Upgrade Now</div>
            </div>
            <img src={bannerone} alt="" className={style.bannerOne} />
            <img src={bannertwo} alt="" className={style.bannerTwo} />
        </section>
    )
}

export default BannerSpot