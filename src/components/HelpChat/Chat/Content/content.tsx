import React from 'react'
import style from './style.module.css'
import logo from '../../../../assets/img/HelpChat/Chat/logo.svg'
import { useLazyAuthMeQuery } from '../../../../Redux/Api/Auth/authUserApi'

interface Message {
    event: string,
    userName: string,
    text: string,
    date: string,
    userId: string,
    id: string
}

interface Props {
    socket: WebSocket
}

const ContentChatModal = React.memo(({ socket: ws }: Props) => {

    const [ message, setMessage ] = React.useState<Message[]>([])
    const [ con, setCon ] = React.useState(false)
    const [ reqBalance, { data: user } ] = useLazyAuthMeQuery()

    const fetchUser = async (token: string) => {
        try{
          await reqBalance(token).unwrap()
        } catch{
            alert('ERROR')
        }
    }

    React.useEffect(() => {

            const token = localStorage.getItem('tokenAuth')

            if(token) fetchUser(token)
           
            ws.onopen = () => {
                    setCon(true)
                    console.log('Online')
            }
            ws.onmessage = (e) => {
                const msg = JSON.parse(e.data)
                setMessage((prev: any) => [...prev, msg])
            }
            ws.onclose = () => {
                 setCon(false)
                 console.log('Socket close')
            }
           ws.onerror = () => {
                 setCon(false)
                 console.log('Error')
            }
    }, [])

    return (

        <section className={style.root}>
            <div className={style.preChat}>
                 <img src={logo} alt="logo" className={style.logo} />
                 <p className={style.pretitle}>Bybit Live Chat </p>
                 <p className={style.pretext}>Providing 24/7 instant responses whenever you need</p>
            </div>
            <div className={style.openDate}>Today</div>
            <div className={style.msgBody}>
                <article className={style.message}>
                    <img src={logo} alt="msgUser" className={style.userIcon} />
                    <div className={style.msgText}>
                    Welcome to Bybit Live Chat Service! 🙂
                    </div>
                </article>
                <article className={style.message}>
                    <img src={logo} alt="msgUser" className={style.userIcon} />
                    <div className={style.msgText}>
                    I'm here to help! Just type what you need assistance with
                    </div>
                </article>
                {
                    message.length > 0 && user &&
                    message.map(({ id, userId, userName, text, date }) => (
                    user?._id === userId ? 
                <div key={id} className={style.myMessBody}>
                <article className={style.myMess}>
                     {text}
                </article>
                </div>
                :
                <article key={id} className={style.message}>
                    <img src={logo} alt="msgUser" className={style.userIcon} />
                    <div className={style.msgText}>
                   {text}
                    </div>
                </article>
                ))
                }
            </div>
        </section>
    )
})

export default ContentChatModal