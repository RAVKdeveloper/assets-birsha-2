import React from 'react'
import style from './style.module.css'
import { CiSearch } from "react-icons/ci";
import { FaArrowRight } from "react-icons/fa6";
import iconCard from '../../../../assets/img/Funding/BannerCardSearching.svg'
import { useAppDispatch, useAppSelector } from '../../../../Redux/Slices/hooks/hooks';
import { fundingSortingSelector, setIsHiddenNullBalance, setSearchValue } from '../../../../Redux/Slices/Funding/FundingSorting';
import debounce from 'lodash.debounce'


const FundingFilter: React.FC = () => {

    const { isHiddenNullBalance } = useAppSelector(fundingSortingSelector)
    const dispatch = useAppDispatch()
    const [ value, setValue ] = React.useState<string>('')


    const getCheckedCheckbox = () => {
        if(isHiddenNullBalance) return dispatch(setIsHiddenNullBalance(false))

        return dispatch(setIsHiddenNullBalance(true))
    } 

    const OnChangeEventInput = React.useCallback(
       debounce((str: string) => { dispatch(setSearchValue(str)) }, 200),
       [] 
    )

    const addSearchValue = (e: React.ChangeEvent<HTMLInputElement>) => { 
        OnChangeEventInput(e.target.value)
        setValue(e.target.value)
    }

    return (

        <section className={style.root}>
            <div className={style.content}>
               <div className={style.searchBody}>
                  <CiSearch className={style.searchIcon} />
                  <input value={value} onChange={addSearchValue} type="text" className={style.searchInput} placeholder='Search' />
               </div>
               <div className={style.checkboxRow}>
                <div onClick={getCheckedCheckbox} className={isHiddenNullBalance ? `${style.checkBox} ${style.check}` : style.checkBox}></div>
                <p className={style.checkBoxText}>Hide Zero Balances</p>
               </div>
            </div>
            <article className={style.card}>
                <img src={iconCard} alt="usdtBanner" className={style.iconCard} />
                <div className={style.columnCard}>
                    <p className={style.titleCard}>Automatically earn yield on idle assets</p>
                    <p className={style.link}>Enable Now < FaArrowRight className={style.arrow} /></p>
                </div>
            </article>
        </section>
    )
}

export default FundingFilter