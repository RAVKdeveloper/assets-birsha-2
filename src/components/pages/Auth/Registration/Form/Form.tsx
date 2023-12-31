import { FC, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
import { CgArrowsExchangeAlt } from "react-icons/cg";
import { SubmitErrorHandler, SubmitHandler, useForm } from 'react-hook-form';
import { useRegistrationMutation } from '../../../../../Redux/Api/Auth/authUserApi';
import { useCreateSpotMutation, useCreateCoinBalanceMutation } from '../../../../../Redux/Api/Auth/createAssetsApi';
import style from './style.module.css'
import { useLocaleStorage } from '../../../../../utils/localstorageHook';

interface FormData {
    nick: string
    email: string
    password: string
}

const FormRegistration: FC = () => {

    const [ regUser, { isError, isLoading } ] = useRegistrationMutation()
    const [ createAssets ] = useCreateSpotMutation()
    const [ createCoinBalance ] = useCreateCoinBalanceMutation()
    const [ isCheck, setIsCheck ] = useState<boolean>(false)
    const {
        register,
        handleSubmit,
        formState: { errors, isValid },
        setError
    } = useForm<FormData>({
        defaultValues: {
            nick: '',
            email: '',
            password: '',
        },
        mode: 'all'
    })
    const navigate = useNavigate()

    const handleCheckbox = () => {
        if(isCheck === true) return setIsCheck(false)
        return setIsCheck(true)
    }

    const addAssets = async (token: string) => {
        await createAssets(token).unwrap()
    } 

    const addUserAsync = async (data: FormData) => {
        try{
            const obj = {
                nickname: data.nick,
                email: data.email,
                password: data.password,
                verificationName: 'none'
            }
    
          const result = await regUser(obj).unwrap()
          localStorage.setItem('tokenAuth', result.token)
          addAssets(result.token)
          await createCoinBalance(result.token).unwrap()
          navigate('/')
        } catch (e) {
            alert('Не удалось зарегистрироваться')
        }
    }

    const submit: SubmitHandler<FormData> = data => {
      addUserAsync(data)
    } 
  
    const error: SubmitErrorHandler<FormData> = data => {
        console.log(data)
    }

    const inputNick = errors.nick ? `${style.input} ${style.error}` : style.input
    const inputEmail = errors.email ? `${style.input} ${style.error}` : style.input
    const inputPass = errors.password ? `${style.input} ${style.error}` : style.input

    return (

        <section className={style.root}>
            <div className={style.titleRow}>
                <h3 className={style.title}>Create Account</h3>
                <NavLink to={'/login'} className={style.linkLoginBody}>
                    <CgArrowsExchangeAlt className={style.linkLogin} />
                    <p className={style.linkText}>Log In</p>
                </NavLink>
            </div>
            <form onSubmit={handleSubmit(submit, error)} className={style.form}>
                <input type="text" className={inputNick} placeholder='NickName' {...register('nick', { required: 'Invalid NickName', maxLength: 25, minLength: 3 })} />
                {
                    errors.nick ? <p className={style.errorText}>{errors.nick?.message}</p> : null
                }
                <input type="text" className={inputEmail} placeholder='Email' {...register('email', { required: 'Invalid Email', maxLength: 55, minLength: 5 })} />
                {
                    errors.email ? <p className={style.errorText}>{errors.email?.message}</p> : null
                }
                <input type="text" className={inputPass} placeholder='Password' {...register('password', { required: 'Invalid Password', maxLength: 25, minLength: 5 })} />
                {
                    errors.password ? <p className={style.errorText}>{errors.password?.message}</p> : null
                }
                <div className={style.termBody}>
                    <div onClick={handleCheckbox} className={isCheck ? `${style.checkbox} ${style.check}` : style.checkbox}></div>
                    <p className={style.checkboxText}>By clicking “Create Account”, you agree to <span>Terms of Service</span> and <span>Privacy Policy</span></p>
                </div>
                <button disabled={isValid && isCheck ? false : true} type='submit' className={isValid && isCheck ? style.btn : `${style.btn} ${style.disabled}`}>Create Account</button>
            </form>
        </section>
    )
}

export default FormRegistration;