import React from "react";
import '../Register/Register.css';
import FormRegistration from "../FormRegistration/FormRegistration";

function Login () {
    return (
        <FormRegistration 
            title='Рады видеть!' 
            button='Войти' 
            text='Ещё не зарегистрированы?' 
            link='Регистрация'
            path='/signup'
            name='registration-form'>
                <fieldset className="register">
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
                            minLength='2' maxLength='30'
                            placeholder='Пароль'
                            required />
                        <span className="register__error"></span>
                    </label>
                </fieldset>
        </FormRegistration>
    )
}

export default Login;