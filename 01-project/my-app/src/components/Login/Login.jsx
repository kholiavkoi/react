import React from 'react'
import { useForm } from "react-hook-form";
import './Login.css'
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";


const Login = (props) => {
    const {
        register,
        formState: {
            errors,
        },
        handleSubmit
    } = useForm({
        mode: "all"
    })


    const onSubmit = (data) => {
        console.log(data)
        props.login(data.email, data.password, data.rememberMe, data.captcha)
    }

    if (props.isAuth) {
        return <Redirect to={'/profile'}/>
    }


    return  <div>
        <h1>Login</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <input type="text"
                       placeholder='login'
                       {...register('email', {
                           required: 'Поле обязательное',
                           minLength: {
                               value: 3,
                               message: 'Минимум 3 символа'
                           }
                       })}
                />
                <div>
                    {errors.email && <div className='required'>{errors.email?.message || 'Field is required'}</div> }
                </div>
                <input type="password"
                       placeholder='password'
                       {...register('password', {
                           required: 'Поле обязательное',
                           minLength: {
                               value: 3,
                               message: 'Минимум 3 символа'
                           }
                       })}
                />
                <div>
                    {errors.password && <div className='required'>{errors.password?.message || 'Field is required'}</div> }
                </div>
                <label >
                    <input type="checkbox"
                           placeholder='rememberMe'
                           {...register('rememberMe')}
                    /> remember me
                </label>

            </div>


            <input type="submit" value='login'/>

            {props.captchaUrl && <img className='captcha' src={props.captchaUrl} alt='captcha'/> }
            {props.captchaUrl && <input type="text"
                                        placeholder='captcha'
                                        {...register('captcha', {
                                            required: 'Поле обязательное',
                                        })}
            /> }
            <div>
                {errors.captcha && <div className='required'>{errors.captcha?.message || 'Field is required'}</div> }
            </div>
        </form>
    </div>

}

const mapStateToProps = (state) => ({
    captchaUrl: state.auth.captchaUrl,
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {login})(Login)