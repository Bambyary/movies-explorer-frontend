const regExpEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const regExpPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]+$/;
const regExpName = /^[a-zA-Zа-яА-Я\s-]+$/;

export function validationRegister (props) {
    //Создаём переменные с условием для валидации
    const isEmailValid = props.email !== undefined && regExpEmail.test(props.email);
    const isPasswordValid = props.password !== undefined && regExpPassword.test(props.password) && props.password.length > 6;
    const isNameValid = props.name !== undefined && regExpName.test(props.name) && props.name.length >= 2 && props.name.length <= 30;
    
    //Устанавливаем текст для ошибок
    props.setNameError(() => {
        if(!props.isFocused) {
            return '';
        } else if (props.name === '') {
            return 'Введите имя'
        } else if (props.name !== '' && !isNameValid) {
            return 'Имя должно содержать не менее 2 и не более 30 символов латинского или русского алфавита, пробел, дефис'
        }
    })

    props.setEmailError(() => {
        if (!props.isFocused) {
            return '';
        } else if (props.email === '') {
            return 'Введите адрес электронной почты'
        } else if (props.email !== '' && !isEmailValid) {
            return 'Введён некорректный адрес электронной почты'
        }
    })

    props.setPasswordError (() => {
        if (!props.isFocused) {
            return ''
        } else  if (props.password === '') {
            return 'Введите пароль'
        } else if (props.password !== '' && !isPasswordValid) {
            return 'Пароль должен содержать латинские символы верхнего и нижнего регистра и хотя бы одну цифру'
        }
    })

    //Записываем в объект булевое значение валидности поля
    props.setIsFormValidity({
        nameValid: isNameValid,
        emailValid: isEmailValid,
        passwordValid: isPasswordValid
    })

}

export function validationLogin (props) {
    //Создаём переменные с условием для валидации
    const isEmailValid = props.email !== undefined && regExpEmail.test(props.email);
    const isPasswordValid = props.password !== undefined && regExpPassword.test(props.password) && props.password.length > 6;

    //Устанавливаем текст для ошибок

    props.setEmailError(() => {
        if (!props.isFocused) {
            return '';
        } else if (props.email === '') {
            return 'Введите адрес электронной почты'
        } else if (props.email !== '' && !isEmailValid) {
            return 'Введён некорректный адрес электронной почты'
        }
    })

    props.setPasswordError (() => {
        if (!props.isFocused) {
            return ''
        } else  if (props.password === '') {
            return 'Введите пароль'
        } else if (props.password !== '' && !isPasswordValid) {
            return 'Пароль должен содержать латинские символы верхнего и нижнего регистра и хотя бы одну цифру'
        }
    })

    //Записываем в объект булевое значение валидности поля
    props.setIsFormValidity({
        emailValid: isEmailValid,
        passwordValid: isPasswordValid
    })

}

export function validationProfile (props) {
    //Создаём переменные с условием для валидации
    const isEmailValid = props.email !== undefined && regExpEmail.test(props.email);
    const isNameValid = props.name !== undefined && regExpName.test(props.name) && props.name.length >= 2 && props.name.length <= 30;

    //Устанавливаем текст для ошибок
    props.setNameError(() => {
        if(!props.isFocused) {
            return '';
        } else if (props.name === '') {
            return 'Введите имя'
        } else if (props.name !== '' && !isNameValid) {
            return 'Имя должно содержать не менее 2 и не более 30 символов латинского или русского алфавита, пробел, дефис'
        }
    })

    props.setEmailError(() => {
        if (!props.isFocused) {
            return '';
        } else if (props.email === '') {
            return 'Введите адрес электронной почты'
        } else if (props.email !== '' && !isEmailValid) {
            return 'Введён некорректный адрес электронной почты'
        }
    })

    //Записываем в объект булевое значение валидности поля
    props.setIsFormValidity({
        nameValid: isNameValid,
        emailValid: isEmailValid,
    })
}