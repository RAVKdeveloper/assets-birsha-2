import { FC, useEffect, useRef } from 'react'
import { useGetParQuery } from '../../../Redux/Api/searchHeaderApi'
import { useAppSelector } from '../../../Redux/Slices/hooks/hooks'
import style from './style.module.css'

interface Props{
    open: boolean
    setOpen: Function
    referenseTo: React.RefObject<HTMLInputElement>
}

const SearchModal: FC<Props> = ({ open, setOpen, referenseTo }) => {

        const { searchVal } = useAppSelector(state => state.searchHeader)
        const { data = [], isLoading, isError } = useGetParQuery(searchVal.toUpperCase())
        const modelRef = useRef<HTMLTableSectionElement>(null)

        console.log(referenseTo.current)

        const closeModal = (e: Event) => {
            if(e.target !== modelRef.current && e.target !== referenseTo.current) {
                 setOpen(false)
            }
        } 

        useEffect(() => {
            window.addEventListener('click', closeModal)

            return () => window.removeEventListener('click', closeModal)
        }, [])

    return (

        <section ref={modelRef} className={open ? `${style.root} ${style.active}` : style.root}>
               <h5 className={style.title}>Trade</h5>
               {
                isError &&
                <div>Произошла ошибка</div>
               }
               {
                isLoading ? 
                null
                :
                    <div className={style.container}>
                        {
                            data.map(({ _id, allPar, market, price, procents }) => (
                              <article key={_id} className={style.card}>
                               <div className={style.cardInfoRow}>
                                     <p className={style.name}>{allPar}</p>
                                     <p className={style.market}>{market}</p>
                               </div>
                               <div className={style.cardPriceRow}>
                                   <p className={style.price}>{price}</p>
                                   <p className={style.procent}>{procents}</p>
                               </div>
                              </article>
                            ))
                        }
                    </div>
               }
        </section>
    )
}

export default SearchModal;