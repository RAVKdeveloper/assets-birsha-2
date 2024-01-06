import React from 'react'
import style from './style.module.css'


const Footer: React.FC = () => {

    return (

       <footer className={style.root}>
          <ul className={style.linkRow}>
            <li className={style.link}>Market Overview</li>
            <li className={style.link}>Trading Fee</li>
            <li className={style.link}>API</li>
            <li className={style.linkEnd}>Help Center</li>
          </ul>
          <p className={style.copyRaight}>© 2018-2024 Bybit.com. All rights reserved.</p>
       </footer>
    )
}

export default Footer