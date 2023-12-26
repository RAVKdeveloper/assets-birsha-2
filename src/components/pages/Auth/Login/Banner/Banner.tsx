import { FC } from 'react'
import image from '../../../../../assets/img/LogRegPages/imgLogBanner.png'
import style from './style.module.css'


const BannerLogin: FC = () => {

    return (

        <section className={style.root}>
            <h4 className={style.title}>Protect Your 1st Copy Trade</h4>
            <p className={style.text}>Enjoy Up to 100 USDT Loss Coverage</p>
            <img src={image} alt="image" className={style.image} />
        </section>
    )
}

export default BannerLogin