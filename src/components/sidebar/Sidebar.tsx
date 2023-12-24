import { FC } from 'react'
import arrowExit from '../../assets/img/Sidebar/arrowExit.svg'
import overwievIcons from '../../assets/img/Sidebar/icons/overview.svg'
import arrowImg from '../../assets/img/Sidebar/icons/arrow.svg'
import { NavLink } from 'react-router-dom'
import { balanceAccountColumn, investedProducsColumn } from '../../assets/db/SidebarsData'
import style from './style.module.css'


const Sidebar: FC = () => {
 
    return (

        <aside className={style.root}>
            <div className={style.arrowExitBody}>
                 <img src={arrowExit} alt="exit" />
            </div>
            <NavLink to={'/'} className={({ isActive }) => isActive ? `${style.overview} ${style.active}` : style.overview}>
                <img src={overwievIcons} alt="icon" className={style.overviewImage} />
                <p className={style.text}>Overview</p>
            </NavLink>
            <h3 className={style.title}>Account</h3>
            <ul className={style.accountList}>
                {
                    balanceAccountColumn.map(({ type, img, arrow, link, id }) => (
                <li key={id}>
                    <NavLink className={({ isActive }) => isActive ? `${style.card} ${style.active}` : style.card} to={link}>
                        <div className={style.info}>
                        <img src={img} alt={type} className={style.cardIcon} />
                        <p className={style.text}>{type}</p>
                        </div>
                        {
                            arrow &&
                            <img src={arrow} alt="arrow" className={style.arrowIcon} />
                        }
                    </NavLink>
                </li>
                    ))
                }
            </ul>
            <h3 className={style.title}>Invested Products</h3>
            <ul className={style.accountList}>
                {
                    investedProducsColumn.map(({ type, id, img, link }) => (
                        <li key={id}>
                        <NavLink className={({ isActive }) => isActive ? `${style.card} ${style.active}` : style.card} to={link}>
                            <div className={style.info}>
                            <img src={img} alt={type} className={style.cardIcon} />
                            <p className={style.text}>{type}</p>
                            </div>
                        </NavLink>
                    </li>
                    ))
                }
            </ul>
        </aside>
    )
} 

export default Sidebar