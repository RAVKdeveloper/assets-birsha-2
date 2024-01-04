import React, { useState } from 'react'
import style from './style.module.css'
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import { Line } from 'react-chartjs-2';
import { useCreateAnaliticsMutation, useLazyGetAnaliticsQuery } from '../../../../../Redux/Api/GlobalAssetsApi/globalAssetsApi';
import { useLocaleStorage } from '../../../../../utils/localstorageHook';


const datesArr = [
    {
        name: '7d',
        value: '7'
    },
    {
        name: '30d',
        value: '30'
    },
    {
        name: '90d',
        value: '90'
    },
]

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );

const options = {
    responsive: true,
    scales: {
      y: {
        display: false
      }
    },
    plugins: {
      legend: {
        display: false
      }
    },
  };
  

const LineBodyOverview: React.FC = () => {

    const [ currentDate, setCurrentDate ] = React.useState<string>('8')
    const token = useLocaleStorage('tokenAuth', 'get')
    const [ reqCreate ] = useCreateAnaliticsMutation()
    const [ reqAnalitics, { data: list } ] = useLazyGetAnaliticsQuery()
    const [ yesterday, setYesterday ] = useState<string | undefined>('')  

    const fetchAnaliticsList = async (token: string) => {
       try{
           const obj = {
               action: currentDate,
               token
           }
     
          const res = await reqAnalitics(obj).unwrap()

           setYesterday(res[0]?.date)
       } catch {
        alert('Error')
       }
    }

    const createAnalitics = async (token: string) => {
       try{
       const res = await reqCreate(token).unwrap()

       setYesterday(res?.date)
       } catch {
        alert('Error')
       }
    } 

    React.useEffect(() => {
       if(token) fetchAnaliticsList(token)
    }, [token, currentDate])

    React.useEffect(() => {
    if(token && list && yesterday !== undefined) {
        const dateProto = new Date()
        const year = dateProto.getFullYear()
        const month = dateProto.getMonth()
        const today = dateProto.getDate()
        const res = `${year}-${month === 0 ? `${month}1` : month}-${today}`
        const finishDate = Date.parse(res)
        
        if(list && list[0] === null) {
          createAnalitics(token)
       } else if(Date.parse(yesterday) < finishDate - 86400000) {
             createAnalitics(token)
       }
    }
    }, [])

    const data = {
        labels: list?.map(({date}) => date.substring(5,10)),
        datasets: [
          {
            label: '',
            data: list?.map(({ balance }) => balance),
            borderColor: '#f7a600',
            backgroundColor: '#f7a600',
          },
        ]
      };

    

    return (

        <section className={style.root}>
            <div className={style.tabsRow}>
                {
                    datesArr.map(({ name, value }, i) => (
                        <div key={i} onClick={() => setCurrentDate((Number(value) + 1).toString())} className={Number(currentDate) === (Number(value) + 1) ? `${style.tab} ${style.active}` : style.tab}>{name}</div>
                    ))
                }
            </div>
            <Line options={options} data={data} width={368} height={146} />
            <p className={style.lastUpdated}>Last Updated: {list ? list[0]?.date.substring(0, 10) : ''}</p>
        </section>
    )
}

export default LineBodyOverview