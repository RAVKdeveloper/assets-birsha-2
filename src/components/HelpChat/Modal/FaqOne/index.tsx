import React from 'react'
import style from './style.module.css'


const FaqOneModal: React.FC = () => {

    return (

        <article className={style.root}>
            <p className={style.title}>You might be looking for</p>
            <ul className={style.content}>
                <li className={style.vopr}>How to Perform Identity Transfer</li>
                <li className={style.vopr}>Benefits of Different Identity Verification Levels</li>
                <li className={style.vopr}>What is an 8-hour session settlement mechanism? </li>
                <li className={style.vopr}>Payment failed : One-Click Buy</li>
                <li className={style.voprEnd}>Individual KYC from Restricted countries</li>
            </ul>
        </article>
    )
}

export default FaqOneModal