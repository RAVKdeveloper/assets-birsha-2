import { FC } from 'react'
import style from './style.module.css'
import qrImg from '../../../assets/img/header/dowloandqr.png'

interface PropsType {
    isVisible: boolean
}

const DowloandModalHeader: FC<PropsType> = ({ isVisible }) => {

    return (

    <section className={isVisible ? `${style.root} ${style.visible}` : style.root}>
       <img src={qrImg} alt="qr" className={style.qrRow} />
       <p className={style.text}>Scan to Dowloand App</p>
       <div className={style.btn}>More Dowloand Options</div>
    </section>
    )
}

export default DowloandModalHeader;