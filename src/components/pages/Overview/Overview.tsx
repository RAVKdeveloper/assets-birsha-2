import style from './style.module.css'
import { FC } from 'react'
import { useAddProductMutation, useGetTestRequestQuery } from '../../../Redux/Api/searchHeaderApi'
import { Test } from '../../../types/types'


const Overview: FC = () => {

    const{ data = [] } = useGetTestRequestQuery('')
    const [ addCrypto, { isLoading } ] = useAddProductMutation()
    const createCrypto = () => { 
        const obj = {
            cryptoName: 'test',
            subtitle: 'test',
            image: 'test',
            id: '12'
        }
        addCrypto(obj)
}

    return (

        <main className={style.root}>
            <p onClick={createCrypto}>Add</p>
              {
                data.length > 0 ?
                data.map(({ cryptoName, id }) => (
                    <div key={id} >{cryptoName}</div>  
                ))
                :
                null
              }
        </main>
    )
}

export default Overview;
