import React from 'react'
import style from './style.module.css'
import { BiSupport } from "react-icons/bi";


const HelpChat: React.FC = () => {
    return (

        <>
          <div className={style.handlerBtn}><BiSupport className={style.icon} /></div>
        </>
    )
}

export default HelpChat