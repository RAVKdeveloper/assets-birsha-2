import React from 'react'
import style from './style.module.css'
import { IoMdClose } from "react-icons/io";
import { useAppDispatch } from '../../../Redux/Slices/hooks/hooks';
import { setIsOpneModalChat, setOpenLiveChat } from '../../../Redux/Slices/Chat/Chat';
import FaqOneModal from './FaqOne';
import SelfServingModal from './SelfSerning';
import FaqTwoModal from './FaqTwo';
import { BiSupport } from "react-icons/bi";


const PreviewModalChat: React.FC = () => {

    const dispatch = useAppDispatch()

    const openLiveChat = () => {
        dispatch(setOpenLiveChat(true))
        dispatch(setIsOpneModalChat(false))
    }

    return (

        <section className={style.root}>
            <h4 className={style.title}>Bybit Live Chat <IoMdClose onClick={() => dispatch(setIsOpneModalChat(false))} className={style.close} /></h4>
            <div className={style.content}>
                <FaqOneModal/>
                <SelfServingModal/>
                <FaqTwoModal/>
                <div onClick={openLiveChat} className={style.btn}>
                    <BiSupport className={style.icon}  />
                    Live Chat
                </div>
            </div>
        </section>
    )
}

export default PreviewModalChat