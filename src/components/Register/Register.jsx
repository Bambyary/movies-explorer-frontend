import React from "react";
import './Register.css';
import FormRegistration from "../FormRegistration/FormRegistration";

function Register () {
    return (
        <FormRegistration 
            title='Добро пожаловать!'
            button='Зарегистрироваться'
            text='Уже зарегистрированы?'
            link='Войти'
            path='/signin'
            name='login-form'
            >
                <fieldset className="register register_margin">
                    <label className="register__label" htmlFor='register-name'>
                        Имя
                        <input className="register__input" 
                        id='register-name' 
                        name='name' 
                        type='text'
                        placeholder='Имя'
                        minLength='2' maxLength='30'
                        required />
                        <span className="register__error"></span>
                    </label>
                    <label className="register__label" htmlFor='register-email'>
                        E-mail
                        <input className="register__input" 
                        id='register-email'
                        name='email' 
                        type='email'
                        placeholder='E-mail'
                        minLength='2' maxLength='30'
                        required />
                        <span className="register__error"></span>
                    </label>
                    <label className="register__label" htmlFor='register-password'>
                        Пароль
                        <input className="register__input" 
                        id='register-password'
                        name='password' 
                        type='password'
                        placeholder='Пароль'
                        minLength='2' maxLength='30'
                        required />
                        <span className="register__error"></span>
                    </label>   
                </fieldset>
            </FormRegistration>
    )
}

export default Register;