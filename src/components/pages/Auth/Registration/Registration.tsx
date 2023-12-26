import { FC } from 'react'
import style from './style.module.css'
import FormRegistration from './Form/Form';
import BannerFormReg from './Banner/Banner';


const RegistrationPage : FC = () => {

    return (

        <main className={style.root}>
            <FormRegistration/>
            <BannerFormReg/>
        </main>
    )
}

export default RegistrationPage;