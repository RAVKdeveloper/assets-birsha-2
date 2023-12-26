import { FC, useEffect, useRef, useState } from 'react'
import { NavLink } from 'react-router-dom';
import { Port } from '../../assets/env/env';
import style from './style.module.css'
import logoImg from '../../assets/img/header/logo.svg'
import avatarIcon from '../../assets/img/header/avatarIcon.png'
import dowloandImg from '../../assets/img/header/icons8-download-45.png'
import { IoSearch } from "react-icons/io5";
import { FaRegBell } from "react-icons/fa";
import { IoIosCloseCircle } from "react-icons/io";
import { useAppDispatch, useAppSelector } from '../../Redux/Slices/hooks/hooks';
import { useAuthMeQuery } from '../../Redux/Api/Auth/authUserApi';
import { setSearchVal } from '../../Redux/Slices/HeaderRedusers/searchHeader';
import AccountHoverHeader from './AccountHover/accHover';
import DowloandModalHeader from './DowloandModal/dowloand';
import SearchModal from './searchModal/modal';


const Header: FC = () => {

    const token = localStorage.getItem('tokenAuth') ? localStorage.getItem('tokenAuth') : ''
    const { data, isError } = useAuthMeQuery(token === null ? '' : token)
    const [ openAcc, setOpenAcc ] = useState<boolean>(false)
    const [ openDowloand, setOpenDowloand ] = useState<boolean>(false)
    const { searchVal } = useAppSelector(state => state.searchHeader)
    const [ isOpen, setIsOpen ] = useState(false)
    const searchRef = useRef<HTMLInputElement>(null)
    const dispatch = useAppDispatch()

    const clearSearchInput = () => dispatch(setSearchVal(''))
    const changeInputValue = (e: React.ChangeEvent<HTMLInputElement>) => dispatch(setSearchVal(e.target.value))
    const openAccModal = () => setOpenAcc(true)
    const closeAccModal = () => setOpenAcc(false)
    const openDowModal = () => setOpenDowloand(true)
    const closeDowModal = () => setOpenDowloand(false)
    const openSearch = () => setIsOpen(true)

 
    return (

        <header className={style.root}>
             <section className={style.left}>
                <img src={logoImg} alt="logo" className={style.logo} />
                <nav className={style.navigation}>
                    <ul>
                        <li className={style.navLink}>Buy Crypto</li>
                        <li className={style.navLink}>Markets</li>
                        <li className={style.navLink}>Trade</li>
                        <li className={style.navLink}>Derivatives</li>
                        <li className={style.navLink}>Tools</li>
                        <li className={style.navLink}>Finance</li>
                        <li className={style.navLink}>Web3</li>
                    </ul>
                </nav>
                <div onClick={openSearch} className={style.searchField}>
                    <div className={style.searchIconBox}><IoSearch className={style.iconSearch} /></div>
                    <input ref={searchRef} onChange={changeInputValue} value={searchVal} type="text" className={style.searchInput} placeholder='🔥 INSP' />
                    {
                        searchVal &&
                        <IoIosCloseCircle className={style.clear} onClick={clearSearchInput} />
                    }

                     <SearchModal open={isOpen} setOpen={setIsOpen} referenseTo={searchRef} />
                </div>
             </section>
             {
                !isError ?
             <section className={style.right}>
                <a href={`http://localhost:${Port}/dashboard`} className={style.btnDeposit}>Deposit</a>
                <p className={style.linkAssets}>Assets</p>
                <div onMouseMove={openAccModal} onMouseLeave={closeAccModal} className={style.hoverElement}>
                <a href={`http://localhost:${Port}/dashboard`}>
                    <img src={avatarIcon} alt="avatar" className={style.iconAvatar} />
                </a>
                    <AccountHoverHeader isVisible={openAcc} />
                </div>
                <div className={style.hoverElement}>
                   <FaRegBell className={style.bell} />
                </div>
                <div onMouseMove={openDowModal} onMouseLeave={closeDowModal} className={style.hoverElement}>
                    <img src={dowloandImg} alt="dowloand" className={style.dowloandImg} />
                    <DowloandModalHeader isVisible={openDowloand} />
                </div>
             </section>
              :
              <section className={style.btnRow}>
                <NavLink to={'/login'} className={style.login}>Log In</NavLink>
                <NavLink to={'/registration'} className={style.registration}>Sign Up</NavLink>
              </section>
             }
        </header>
    )
} 

export default Header;