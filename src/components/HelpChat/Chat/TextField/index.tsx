import React from 'react'
import style from './style.module.css'
import { FaArrowUp } from "react-icons/fa";
import { useAppDispatch, useAppSelector } from '../../../../Redux/Slices/hooks/hooks';
import { chatSelector, setSendText } from '../../../../Redux/Slices/Chat/Chat';


const SendFieldChatModal: React.FC = () => {

    const { sendText } = useAppSelector(chatSelector)
    const dispatch = useAppDispatch()

    const setValueInput = (e: React.ChangeEvent<HTMLInputElement>) => dispatch(setSendText(e.target.value))

    return (

        <section className={style.root}>
           <div className={style.sendBox}>
              <input value={sendText} onChange={setValueInput} type="text" className={style.input} placeholder='Type within 10 words' />   
              {
                  sendText &&
                  <div className={style.btnSend}><FaArrowUp/></div>
              }
           </div>     
           <div className={style.cansel}>
              Cansel
            </div>   
        </section>
    )
}

export default SendFieldChatModal