import { FC } from 'react'
import { FaArrowRightLong } from "react-icons/fa6"
import { IoMdClose } from "react-icons/io"
import iconOne from '../../../../../assets/img/overview/head/depositModal/icon1.png'
import iconTwo from '../../../../../assets/img/overview/head/depositModal/icon2.png'
import iconThree from '../../../../../assets/img/overview/head/depositModal/icon3.png'
import iconFour from '../../../../../assets/img/overview/head/depositModal/icon4.png'
import { useAppDispatch, useAppSelector } from '../../../../../Redux/Slices/hooks/hooks'
import { setOpenDepositModal } from '../../../../../Redux/Slices/Overview/headModals/headModals'
import style from './style.module.css'


const DepositModal: FC = () => {

    const { openDepositModal } = useAppSelector(state => state.headModals)
    const dispatch = useAppDispatch()

    const cardFiat = [
        {
            type: 'Buy With Rub',
            img: iconOne,
            subtitle: 'Visa, Mastercard and JCB are supported',
        },
        {
            type: 'P2P Trading',
            img: iconTwo,
            subtitle: 'Tinkoff, Sberbank, Bank Transfer and more',
        },
        {
            type: 'Deposit RUB',
            img: iconThree,
            subtitle: 'Deposit via Bank Tranfers or Top-Ups',
        },
    ]

    const closeModal = () => dispatch(setOpenDepositModal(false))

    const isOpen = openDepositModal ? `${style.root} ${style.active}` : style.root

    return (

        <section className={isOpen}>
            <div className={style.modal}>
                  <h5 className={style.title}>Select Payment Method</h5>
                  <p className={style.subTitle}>Buy Crypto with Fiat</p>
                  <div className={style.fiatCardContainer}>
                    {
                        cardFiat.map(({ type, img, subtitle }, i) => (
                            <article key={i} className={style.card}>
                            <div className={style.content}>
                                 <img src={img} alt={type} className={style.icon} />
                                 <div className={style.column}>
                                    <p className={style.cardTitle}>{type}</p>
                                    <p className={style.cardSubtitle}>{subtitle}</p>
                                 </div>
                            </div>
                            <div className={style.btnArrow}>
                                <FaArrowRightLong className={style.arrowCard} />
                            </div>
                        </article>
                        ))
                    }
                  </div>
                  <p className={style.subTitleDeposit}>Deposit Width Crypto</p>
                    <article className={style.card}>
                        <div className={style.content}>
                             <img src={iconFour} alt="deposit crypto" className={style.icon} />
                             <div className={style.column}>
                                <p className={style.cardTitle}>Deposit Crypto</p>
                                <p className={style.cardSubtitle}>Already have crypto? Deposit directly</p>
                             </div>
                        </div>
                        <div className={style.btnArrow}>
                            <FaArrowRightLong className={style.arrowCard} />
                        </div>
                    </article>
                    <p className={style.bottomLink}>
                    New to crypto? Check out the
                    <span>Deposit FAQ <FaArrowRightLong className={style.arrowBottom} /></span>
                    </p>
                    <IoMdClose onClick={closeModal} className={style.close} />
            </div>
        </section>
    )
}

export default DepositModal  