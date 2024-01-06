import React from 'react'
import style from './style.module.css'
import { CiSearch } from "react-icons/ci";
import { useAppDispatch, useAppSelector } from '../../../../Redux/Slices/hooks/hooks';
import { setIsVisibleNullBalance, spotSortingSelector, setSearchValue } from '../../../../Redux/Slices/Spot/SpotSorting';
import debonce from 'lodash.debounce'



const SpotSorting: React.FC = () => {

    const { isVisbleNullBalance } = useAppSelector(spotSortingSelector)
    const dispatch = useAppDispatch()
    const [ value, setValue ] = React.useState<string>('')


    const getCheckedCheckBox = () => {
         if(isVisbleNullBalance) return dispatch(setIsVisibleNullBalance(false))

         return dispatch(setIsVisibleNullBalance(true))
    }  

    const updateSearchValue = React.useCallback(
        debonce((str: string) => dispatch(setSearchValue(str)), 1000),
        []
    )

    const getLocalSearchValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
        updateSearchValue(e.target.value)
    } 


    return (

        <section className={style.root}>
            <div className={style.content}>
               <div className={style.searchBody}>
                  <CiSearch className={style.searchIcon} />
                  <input value={value} onChange={getLocalSearchValue}  type="text" className={style.searchInput} placeholder='Search' />
               </div>
               <div className={style.checkboxRow}>
                <div onClick={getCheckedCheckBox} className={isVisbleNullBalance ? `${style.checkBox} ${style.check}` : style.checkBox}></div>
                <p className={style.checkBoxText}>Hide Zero Balances</p>
               </div>
            </div>
        </section>
    )
}  

export default SpotSorting