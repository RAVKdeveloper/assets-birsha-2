import React from 'react'
import style from './style.module.css'
import { BiSupport } from "react-icons/bi";
import { useAppDispatch, useAppSelector } from '../../Redux/Slices/hooks/hooks';
import { chatSelector, setIsOpneModalChat } from '../../Redux/Slices/Chat/Chat';
import PreviewModalChat from './Modal/modal';
import LiveChat from './Chat/chat';


const HelpChat: React.FC = () => {

    const { isOpenModalChat, openLiveChat } = useAppSelector(chatSelector)
    const dispatch = useAppDispatch()

    const openModal = () => dispatch(setIsOpneModalChat(true))

    return (

        <>
          {
              isOpenModalChat ?
              <PreviewModalChat/>
              :
              openLiveChat ?
              <LiveChat/>
              :
              <div onClick={openModal} className={style.handlerBtn}><BiSupport className={style.icon} /></div>
          }
        </>
    )
}

export default HelpChat