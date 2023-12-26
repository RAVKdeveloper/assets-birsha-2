import fundingImg from '../img/Sidebar/icons/funding.svg';
import spotImg from '../img/Sidebar/icons/spot.svg';
import derivImg from '../img/Sidebar/icons/derivateves.svg';
import usdcderivImg from '../img/Sidebar/icons/usdcderivatives.svg';
import arrow from '../img/Sidebar/icons/arrow.svg'
import earn from '../img/Sidebar/icons/earn.svg'
import lending from '../img/Sidebar/icons/lending.svg'
import tradePerfomens from '../img/Sidebar/icons/tradePerfomens.svg'
import orders from '../img/Sidebar/icons/orders.svg'



export const balanceAccountColumn = [
    {
        id: 1,
        type: 'Funding',
        img: fundingImg,
        arrow: '',
        link: '/funding'
    },
    {
        id: 2,
        type: 'Spot',
        img: spotImg,
        arrow: arrow,
        link: '/spot'
    },
    {
        id: 3,
        type: 'Derivatives',
        img: derivImg,
        arrow: arrow,
        link: '/derivatives'
    },
    {
        id: 4,
        type: 'USDC Derivatives',
        img: usdcderivImg,
        arrow: arrow,
        link: '/Usdcderivatives'
    },
]

export const investedProducsColumn = [
    {
        id: 1,
        type: 'Earn',
        img: earn,
        link: '/earn'
    },
    {
        id: 2,
        type: 'Lending',
        img: lending,
        link: '/lending'
    }
]

export const analisisColumn = [
    {
        id: 1,
        type: 'Trading Performance',
        img: tradePerfomens,
        link: '/tradingperfomens',
    },
    {
        id: 2,
        type: 'Orders',
        img: orders,
        link: '/orders',
    }
]