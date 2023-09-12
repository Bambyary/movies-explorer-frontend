export function validationRegister (props) {
    //Создаём переменные с условием для валидации
    const isEmailValid = props.email !== undefined && /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(props.email);
    const isPasswordValid = props.password !== undefined && /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]+$/.test(props.password) && props.password.length > 6;
    const isNameValid = props.name !== undefined && /^[a-zA-Zа-яА-Я\s-]+$/.test(props.name) && props.name.length >= 2 && props.name.length <= 30;

    //Устанавливаем текст для ошибок
    props.setIsNameError(() => {
        if(!props.isFocused) {
            return '';
        } else if (props.name === '') {
            return 'Введите имя'
        } else if (props.name !== '' && !isNameValid) {
            return 'Имя должно содержать не менее 2 и не более 30 символов латинского или русского алфавита, пробел, дефис'
        }
    })

    props.setIsEmailError(() => {
        if (!props.isFocused) {
            return '';
        } else if (props.email === '') {
            return 'Введите адрес электронной почты'
        } else if (props.email !== '' && !isEmailValid) {
            return 'Введён некорректный адрес электронной почты'
        }
    })

    props.setIsPasswordError (() => {
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
    const isEmailValid = props.email !== undefined && /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(props.email);
    const isPasswordValid = props.password !== undefined && /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]+$/.test(props.password) && props.password.length > 6;

    //Устанавливаем текст для ошибок

    props.setIsEmailError(() => {
        if (!props.isFocused) {
            return '';
        } else if (props.email === '') {
            return 'Введите адрес электронной почты'
        } else if (props.email !== '' && !isEmailValid) {
            return 'Введён некорректный адрес электронной почты'
        }
    })

    props.setIsPasswordError (() => {
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