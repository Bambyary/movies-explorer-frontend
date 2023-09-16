import React from "react";
import '../Register/Register.css';
import FormRegistration from "../FormRegistration/FormRegistration";
import {validationLogin} from '../../utils/validation';
import { authorize } from '../../utils/MainApi';
import { useNavigate } from 'react-router-dom';

function Login (props) {

    //Создаём переменные, в которые будут записываться значения из полей ввода
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    //Создаём переменную с объектом, в который будет записываться валидность каждого поля ввода
    const [isFormValidity, setIsFormValidity] = React.useState({ emailValid: false, passwordValid: false });
    const emailValidity = isFormValidity.emailValid;
    const passwordValidity = isFormValidity.passwordValid;

    //Создаём переменную, которая проверит всю  форму на валидность
    const formValid = emailValidity && passwordValidity;

    //Создаём переменные, в которые будет записываться текст ошибки
    const [emailError, setEmailError] = React.useState('');
    const [passwordError, setPasswordError] = React.useState('');
    const [submitError, setSubmitError] = React.useState('');

    //Создаём переменную, которая проверяет состояние фокуса у полей ввода
    const [isFocused, setIsFocused] = React.useState(false);

    //Записываем в переменную useNavigate()
    const navigate = useNavigate();

    //Этот useEffect сбрасывает значения полей форм при обновлении страницы
    React.useEffect(() => {
        setEmail('');
        setPassword('');
    }, [])

    //Этот useEffect запускает функцию валидации
    React.useEffect(() => {
        validationLogin({email, password, setEmailError, setPasswordError, setIsFormValidity, isFocused})
    }, [email, password, setIsFormValidity, setIsFocused])

    //Создаём функции, которые будут записывать значения каждого поля ввода в соответствующую переменную
    function handleEmailChange (e) {
        setEmail(e.target.value);
    }

    function handlePasswordChange (e) {
        setPassword(e.target.value);
    }

    //Функции, меняющие состояние фокуса на полях ввода
    function handleFocus () {
        setIsFocused(true);
    }

    function handleBlur () {
        setIsFocused(false);
    }

    //Функция авторизации
    function handleSubmit (e) {
        e.preventDefault()
        
        authorize(email, password)
        .then(data => {
            if(data.token) {
                setEmail('');
                setPassword('');
                props.setIsLoggedIn(true);
                navigate('/movies', { replace : true })
            } else if (data === 401) {
                setSubmitError('Вы ввели неправильный логин или пароль.')
            } else if (data === 400) {
                setSubmitError('При авторизации произошла ошибка. Токен не передан или передан не в том формате.')
            } else {
                setSubmitError('При авторизации произошла ошибка. Переданный токен некорректен.')
            }
        })
        .catch(err => {
            return `Возникла ошибка: ${err}`
        })
    }

    return (
        <FormRegistration 
            title='Рады видеть!' 
            button='Войти' 
            text='Ещё не зарегистрированы?' 
            link='Регистрация'
            path='/signup'
            name='registration-form'
            formValid={formValid}
            handleSubmit={handleSubmit}
            submitError={submitError}>
                <section className="register">
                    <fieldset className="register__fieldset">
                        <label className="register__label" htmlFor='register-email'>
                            E-mail
                            <input className={`register__input ${!emailValidity && email !== '' && 'register__input_error register__input_error'}`}  
                                id='register-email' 
                                name='email' 
                                type='email'
                                placeholder='E-mail'
                                minLength='2' maxLength='30'
                                required
                                value={email || ''}
                                onChange={handleEmailChange}
                                onFocus={handleFocus}
                                onBlur={handleBlur} />
                            <span className="register__error">{emailError}</span>
                        </label>
                        <label className="register__label" htmlFor='register-password'>
                            Пароль
                            <input className={`register__input ${!passwordValidity && password !== '' && 'register__input_error register__input_error'}`}
                                id='register-password' 
                                name='password'
                                type='password'
                                minLength='6' maxLength='30'
                                placeholder='Пароль'
                                required
                                value={password || ''}
                                onChange={handlePasswordChange}
                                onFocus={handleFocus}
                                onBlur={handleBlur} />
                            <span className="register__error">{passwordError}</span>
                        </label>
                    </fieldset>
                </section>
        </FormRegistration>
    )
}

export default Login;