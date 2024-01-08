import React from 'react'
import style from './style.module.css'
import { FaArrowUp } from "react-icons/fa";
import { useAppDispatch, useAppSelector } from '../../../../Redux/Slices/hooks/hooks';
import { chatSelector, setSendText } from '../../../../Redux/Slices/Chat/Chat';
import { useLazyAuthMeQuery } from '../../../../Redux/Api/Auth/authUserApi';

interface Props {
    socket: WebSocket
}

const SendFieldChatModal: React.FC<Props> = ({ socket: ws }) => {

    const { sendText } = useAppSelector(chatSelector)
    const dispatch = useAppDispatch()
    const [ reqMe, { data } ] = useLazyAuthMeQuery()

    const setValueInput = (e: React.ChangeEvent<HTMLInputElement>) => dispatch(setSendText(e.target.value))

    const fetchMe = async (token: string) => {
         try{
             await reqMe(token).unwrap()
         } catch {
            alert('Error')
         }
    }

    React.useEffect(() => {
       const token = localStorage.getItem('tokenAuth')

       if(token) fetchMe(token)
    }, [])


const sendMessage = () => {

            const msg = {
             event: 'message',
             userName: data?.nickname,
             text: sendText,
             date: Date.now(),
             userId: data?._id,
             id: Date.now()
            }
      
            ws.send(JSON.stringify(msg))   
            console.log(msg)

    dispatch(setSendText(''))
    }
 

    return (

        <section className={style.root}>
           <div className={style.sendBox}>
              <input value={sendText} onChange={setValueInput} type="text" className={style.input} placeholder='Type within 10 words' />   
              {
                  sendText &&
                  <div onClick={sendMessage} className={style.btnSend}><FaArrowUp/></div>
              }
           </div>     
           <div className={style.cansel}>
              Cansel
            </div>   
        </section>
    )
}

export default SendFieldChatModal