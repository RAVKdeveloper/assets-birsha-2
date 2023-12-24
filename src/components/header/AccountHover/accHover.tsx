import { FC } from 'react'
import { useFetchUserQuery } from '../../../Redux/Api/userBasicApi'
import { useLocaleStorage } from '../../../utils/localstorageHook'
import style from './style.module.css'
import avatarImg from '../../../assets/img/header/avatarIcon.png'

interface PropsType {
    isVisible: boolean 
}

const AccountHoverHeader: FC<PropsType> = ({ isVisible }) => {

    const lsVal = useLocaleStorage('auth', 'get') 
    const { data, isLoading } = useFetchUserQuery(lsVal)

    return (

        <section className={isVisible ? `${style.root} ${style.visible}` : style.root}>
        {
         data !== undefined &&
         <>
        <div className={style.infoRow}>
            <img src={avatarImg} alt="avatar" className={style.avatarImg} />
            <div className={style.infoColumn}>
                <p className={style.email}>{data.name}</p>
                <p className={style.uid}>UID: <span>56{data.id}</span></p>
            </div>
        </div>
        <div className={style.btnRow}>
            <button className={style.btn}>Logout</button>
        </div>
        </>
        }
    </section>
    )
}

export default AccountHoverHeader;