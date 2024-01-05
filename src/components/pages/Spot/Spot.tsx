import React from 'react'
import style from './style.module.css'
import Sidebar from '../../sidebar/Sidebar'
import BannerSpot from './Banner/banner'


const SpotPage: React.FC = () => {

    return (

        <>
          <Sidebar/>
          <main className={style.root}>
            <BannerSpot/>
          </main>
        </>
    )
}

export default SpotPage