import Sidebar from '../../sidebar/Sidebar';
import HistoryAndLineOverviewContainer from './Histor&Line/historyandlineOverview';
import OverInfoOverwiev from './OverInfo/OverInfo';
import OverviewList from './OverviewList/OverviewList';
import style from './style.module.css'
import { FC } from 'react'


const Overview: FC = () => {

    return (

        <>
        <Sidebar/>
        <main className={style.root}>
            <OverInfoOverwiev/>    
            <div className={style.contentRow}>
            <OverviewList/>    
            <HistoryAndLineOverviewContainer/>
            </div> 
        </main>
        </>
    )
}

export default Overview;
