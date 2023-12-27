import Sidebar from '../../sidebar/Sidebar';
import OverInfoOverwiev from './OverInfo/OverInfo';
import style from './style.module.css'
import { FC } from 'react'


const Overview: FC = () => {

    return (

        <>
        <Sidebar/>
        <main className={style.root}>
            <OverInfoOverwiev/>     
        </main>
        </>
    )
}

export default Overview;
