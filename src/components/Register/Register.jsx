import React from "react";
import './Register.css';
import FormRegistration from "../FormRegistration/FormRegistration";
import { validationRegister } from '../../utils/validation';
import { register } from '../../utils/MainApi';
import { useNavigate } from 'react-router-dom';

function Register (props) {
 

    //Создаём переменные, в которые будут записываться значения из полей ввода
    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    //Создаём переменную с объектом, в который будет записываться валидность каждого поля ввода
    const [isFormValidity, setIsFormValidity] = React.useState({ nameValid: false, emailValid: false, passwordValid: false });
    const nameValidity = isFormValidity.nameValid;
    const emailValidity = isFormValidity.emailValid;
    const passwordValidity = isFormValidity.passwordValid;

    //Создаём переменную, которая проверит всю  форму на валидность
    const formValid = nameValidity && emailValidity && passwordValidity;

    //Создаём переменные, в которые будет записываться текст ошибки
    const [nameError, setNameError] = React.useState('');
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
        setName('');
    }, [])

    //Этот useEffect запускает функцию валидации
    React.useEffect(() => {
        validationRegister({name, email, password, setEmailError, setNameError, setPasswordError, setIsFormValidity, isFocused})
    }, [name, email, password, setIsFormValidity, setIsFocused])

    //Создаём функции, которые будут записывать значения каждого поля ввода в соответствующую переменную
    function handleNameChange (e) {
        setName(e.target.value);
    }

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

    //Функция отвечает за регистрацию
    function handleSubmit (e) {
        e.preventDefault();
        props.setIsLoading(true)

        register(name, email, password)
        .then(data => {
            if(data.token) {
                navigate('/movies', {replace: true});
                props.setIsLoggedIn(true);
            } else if (data === 409) {
                setSubmitError('Пользователь с таким email уже существует.')
            } else {
                setSubmitError('При регистрации пользователя произошла ошибка.')
            }

        })
        .catch(err => {
            return `Возникла ошибка: ${err}`
        })
        .finally(() => {
            props.setIsLoading(false);
        })
    }

    return (
        <FormRegistration 
            title='Добро пожаловать!'
            button='Зарегистрироваться'
            text='Уже зарегистрированы?'
            link='Войти'
            path='/signin'
            name='login-form'
            formValid={formValid}
            handleSubmit={handleSubmit}
            submitError={submitError}
            isLoading={props.isLoading}
            >
                <section className="register">
                    <fieldset className="register__fieldset register__fieldset_margin">
                        <label className="register__label" htmlFor='register-name'>
                            Имя
                            <input className={`register__input ${!nameValidity && name !== '' && 'register__input_error register__input_error'}`} 
                            id='register-name' 
                            name='name' 
                            type='text'
                            placeholder='Имя'
                            minLength='2' maxLength='30'
                            required
                            value={name || ''}
                            onChange={handleNameChange}
                            onFocus={handleFocus}
                            onBlur={handleBlur} />
                            <span className="register__error">{nameError}</span>
                        </label>
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
                            placeholder='Пароль'
                            minLength='6' maxLength='30'
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

export default Register;