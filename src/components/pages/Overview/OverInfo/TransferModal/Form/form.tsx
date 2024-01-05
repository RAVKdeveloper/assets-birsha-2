import React from 'react'
import style from './style.module.css'
import SelectsAssetsFromToTransfer from './SelectToFromAssets/selects'
import CoinSelectTransferModal from './CoinSelect&Modal/select'
import AmountInputTransferModal from './Amount/amount'
import { useAppDispatch, useAppSelector } from '../../../../../../Redux/Slices/hooks/hooks'
import { tranfermodalSelector } from '../../../../../../Redux/Slices/Overview/TransferModal/transferModal'
import { useCreateTransferMutation } from '../../../../../../Redux/Api/TransferModal/transfer'


const FormTransferModal: React.FC = () => {

    const { amount, isErrorCurrent, coin, to, from } = useAppSelector(tranfermodalSelector)
    const dispatch = useAppDispatch()
    const [ reqCreate, { isLoading } ] = useCreateTransferMutation()

    const isDisable = amount === '' || isErrorCurrent || Number(amount) <= 0 ? true : false

    const createOrderHandler = async () => {
        const token = localStorage.getItem('tokenAuth')

        if(token) {
            try{
                const obj = {
                    coin: coin.name,
                    to,
                    from,
                    amount,
                    token
                }
    
                await reqCreate(obj).unwrap()

                alert('Transfer Complete!!!')

            } catch (e: any) {
                alert(e.data.message)
            }
        }
    }

    return (

        <section className={style.root}>
            <SelectsAssetsFromToTransfer/>
            <CoinSelectTransferModal/>
            <AmountInputTransferModal/>
            <button onClick={createOrderHandler} disabled={isDisable} className={isDisable ? `${style.btn} ${style.dis}` : style.btn}>Confirm</button>
        </section>
    )
}

export default FormTransferModal