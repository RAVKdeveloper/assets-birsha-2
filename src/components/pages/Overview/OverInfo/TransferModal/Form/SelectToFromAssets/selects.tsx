import React from 'react'
import style from './style.module.css'
import FromAssetModalTransfer from './Modals/from';

import iconImg from '../../../../../../../assets/img/overview/head/TransferModal/arrowExchangeIcon.svg'
import { IoMdArrowDropdown } from "react-icons/io";
import { useAppDispatch, useAppSelector } from '../../../../../../../Redux/Slices/hooks/hooks';
import { setFrom, setIsOpenFrom, setIsOpenTo, setTo, tranfermodalSelector } from '../../../../../../../Redux/Slices/Overview/TransferModal/transferModal';
import ToAssetTransferModal from './Modals/to';

const SelectsAssetsFromToTransfer: React.FC = () => {

    const { from, to, isOpenFrom, isOpenTo } = useAppSelector(tranfermodalSelector)
    const dispatch = useAppDispatch()


    const openFrom = () => {
         if(isOpenFrom) return dispatch(setIsOpenFrom(false))

         return dispatch(setIsOpenFrom(true))
    }

    const openTo = () => {
        if(isOpenTo) return dispatch(setIsOpenTo(false))

        return dispatch(setIsOpenTo(true))
   }

   const reverseToFrom = () => {
        dispatch(setFrom(to))
        dispatch(setTo(from))
   }

    return (

        <section className={style.root}>
            <div className={style.selectBody}>
                 <span className={style.title}>From</span>
                 <div onClick={openFrom} className={isOpenFrom ? `${style.select} ${style.active}` : style.select}>
                    <p className={style.name}>{from}</p>
                    <IoMdArrowDropdown className={isOpenFrom ? `${style.arrow} ${style.active}` : style.arrow} />
                 </div>
                 <FromAssetModalTransfer/>
            </div>
            <div onClick={reverseToFrom } className={style.iconBody}>
              <img src={iconImg} alt='transfer' className={style.icon} />
            </div>
            <div className={style.selectBody}>
                 <span className={style.title}>To</span>
                 <div onClick={openTo} className={isOpenTo ? `${style.select} ${style.active}` : style.select}>
                    <p className={style.name}>{to}</p>
                    <IoMdArrowDropdown className={isOpenTo ? `${style.arrow} ${style.active}` : style.arrow} />
                 </div>
                 <ToAssetTransferModal/>
            </div>
        </section>
    )
} 

export default SelectsAssetsFromToTransfer