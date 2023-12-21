import { FC } from 'react'
import style from './style.module.css'
import testImg from '../../../assets/img/header/avatarIcon.png'


const SearchModal: FC = () => {

    return (

        <section className={style.root}>
               <h5 className={style.title}>Trade</h5>
               <div className={style.container}>
                    <article className={style.card}>
                          <div className={style.cardInfoRow}>
                              <img src={testImg} alt="" className={style.icon} />
                              <div className={style.column}>
                                <p className={style.name}>BTCUSDT</p>
                                <p className={style.market}>Spot</p>
                              </div>
                          </div>
                          <div className={style.cardPriceRow}>
                              <p className={style.price}>44000</p>
                              <p className={style.procent}>10.56%</p>
                          </div>
                    </article>
               </div>
        </section>
    )
}

export default SearchModal;