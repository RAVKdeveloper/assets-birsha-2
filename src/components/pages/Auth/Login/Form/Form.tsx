import { FC, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form';
import { NavLink, useNavigate } from 'react-router-dom'
import { useLoginMutation } from '../../../../../Redux/Api/Auth/authUserApi';
import { CgArrowsExchangeAlt } from "react-icons/cg";
import style from './style.module.css'

interface FormData {
    email: string
    password: string
}

const FormLogin: FC = () => {

    const [ loginUser ] = useLoginMutation()
    const {
        register,
        handleSubmit,
        formState: { errors, isValid }
    } = useForm<FormData>({
        defaultValues: {
            email: '',
            password: '',
        },
        mode: 'all'
    })
    const navigate = useNavigate()

    const addLoginUser = async (data: FormData) => {
        try{
            const { token } = await loginUser(data).unwrap()
            localStorage.setItem('tokenAuth', token)
            navigate('/')
        } catch {
            alert('Не удалось авторизоваться')
        }
    }

    const submit: SubmitHandler<FormData> = data => {
        addLoginUser(data)
      } 

      const inputEmail = errors.email ? `${style.input} ${style.error}` : style.input
      const inputPass = errors.password ? `${style.input} ${style.error}` : style.input

    return (

        <section className={style.root}>
             <div className={style.titleRow}>
                <h3 className={style.title}>Welcome to Ravk</h3>
                <NavLink to={'/registration'} className={style.linkLoginBody}>
                    <CgArrowsExchangeAlt className={style.linkLogin} />
                    <p className={style.linkText}>Sign Up</p>
                </NavLink>
            </div>
            <form onSubmit={handleSubmit(submit)} className={style.form}>
                <input type="text" className={inputEmail} placeholder='Email' {...register('email', { required: 'Invalid Email', maxLength: 35, minLength: 5 })} />
                {
                      errors.email && <p className={style.errorText}>{errors.email?.message}</p> 
                }
                <input type="text" className={inputPass} placeholder='Password' {...register('password', { required: 'Invalid Password', maxLength: 25, minLength: 5 })} />
                {
                      errors.password && <p className={style.errorText}>{errors.password?.message}</p> 
                }
                <p className={style.forgotPass}>Forgot password</p>
                <button disabled={!isValid} type='submit' className={isValid ? style.btn : `${style.btn} ${style.disabled}`}>Log In</button>
            </form>
        </section>
    )
}

export default FormLogin