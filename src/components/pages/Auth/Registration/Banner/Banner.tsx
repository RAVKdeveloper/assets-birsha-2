import { FC } from 'react'
import image from '../../../../../assets/img/LogRegPages/imgRegBanner.png'
import style from './style.module.css'


const BannerFormReg: FC = () => {

    return (

        <section className={style.root}>
            <h4 className={style.title}>Bybit Starter Rewards</h4>
            <p className={style.text}>Get Up to <span>5,000 USDT</span> When You Register, Deposit and Trade!</p>
            <img src={image} alt="image" className={style.image} />
        </section>
    )
} 

export default BannerFormReg;