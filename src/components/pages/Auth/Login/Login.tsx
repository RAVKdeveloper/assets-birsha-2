import { FC } from 'react'
import style from './style.module.css'
import FormLogin from './Form/Form'
import BannerLogin from './Banner/Banner'


const LoginPage: FC = () => {

    return (

        <main className={style.root}>
            <FormLogin/>
            <BannerLogin/>
        </main>
    )
}

export default LoginPage