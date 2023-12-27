import { FC } from 'react'
import { LuEye } from "react-icons/lu"
import { LuEyeOff } from "react-icons/lu"
import style from './style.module.css'
import DepositModal from './DepositModal/modal'
import { setOpenDepositModal } from '../../../../Redux/Slices/Overview/headModals/headModals'
import { useAppDispatch } from '../../../../Redux/Slices/hooks/hooks'


const OverInfoOverwiev: FC = () => {

    const dispatch = useAppDispatch()

    const openModalDeposit = () => dispatch(setOpenDepositModal(true))

    return (

        <section className={style.root}>
            <div className={style.balanceColumn}>
                <p className={style.title}>Assets Overview <LuEye className={style.eye} /></p>
                <p className={style.balance}>0.00 <span>USD</span></p>
                <p className={style.balanceBtc}>= 0.000000000 <span>BTC</span></p>
            </div>
            <div className={style.btnRow}>
                <div onClick={openModalDeposit} className={style.btnOrange}>Deposit</div>
                <div className={style.btnTransperant}>Withdraw</div>
                <div className={style.btnTransperant}>Transfer</div>
                <div className={style.btnTransperant}>Convert</div>
            </div>
            <DepositModal/>
        </section>
    )
}

export default OverInfoOverwiev