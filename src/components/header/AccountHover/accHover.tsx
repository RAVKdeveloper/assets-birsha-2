import { FC } from 'react'
import style from './style.module.css'
import avatarImg from '../../../assets/img/header/avatarIcon.png'

interface PropsType {
    isVisible: boolean 
}

const AccountHoverHeader: FC<PropsType> = ({ isVisible }) => {

    return (

        <aside className={isVisible ? `${style.root} ${style.visible}` : style.root}>
        <div className={style.infoRow}>
            <img src={avatarImg} alt="avatar" className={style.avatarImg} />
            <div className={style.infoColumn}>
                <p className={style.email}>shcherbakov@gmail.com</p>
                <p className={style.uid}>UID: <span>567</span></p>
            </div>
        </div>
        <div className={style.btnRow}>
            <button className={style.btn}>Logout</button>
        </div>
    </aside>
    )
}

export default AccountHoverHeader;