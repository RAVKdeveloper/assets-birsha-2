import { FC } from 'react'
import { useAuthMeQuery } from '../../../Redux/Api/Auth/authUserApi'
import { useNavigate } from 'react-router-dom'
import style from './style.module.css'
import avatarImg from '../../../assets/img/header/avatarIcon.png'

interface PropsType {
    isVisible: boolean 
}

const AccountHoverHeader: FC<PropsType> = ({ isVisible }) => {

    const token = localStorage.getItem('tokenAuth') ? localStorage.getItem('tokenAuth') : ''
    const { data, isError } = useAuthMeQuery(token === null ? '' : token)
    const navigate = useNavigate()

    const logout = () => { 
        localStorage.removeItem('tokenAuth')
        navigate('/')
    }

    return (

        <section className={isVisible ? `${style.root} ${style.visible}` : style.root}>
        {
         data !== undefined &&
         <>
        <div className={style.infoRow}>
            <img src={avatarImg} alt="avatar" className={style.avatarImg} />
            <div className={style.infoColumn}>
                <p className={style.email}>{data.email}</p>
                <p className={style.uid}>Nick: <span>{data.nickname}</span></p>
            </div>
        </div>
        <div className={style.btnRow}>
            <button onClick={logout} className={style.btn}>Logout</button>
        </div>
        </>
        }
    </section>
    )
}

export default AccountHoverHeader;