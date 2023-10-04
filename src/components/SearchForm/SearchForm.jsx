import React from "react";
import './SearchForm.css';
import search from '../../images/search.svg';
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";

function SearchForm (props) {

    const [isFocused, setIsFocused] = React.useState(false); //Стейт переменная, меняющая значение фокуса

    //Создаём функцию, которая будет записывать значение поля ввода в соответствующую переменную
    function handleChange (e) {
        props.setKeyWord(e.target.value);
    }

    //Функция, отвечающая за состояние фокуса
    function handleFocus () {
        setIsFocused(true);
    }

    //Функция, отвечающая за состояние вне фокуса
    function handleBlur () {
        setIsFocused(false);
    }

    return (
        <section className="search">
            <form className="search__form" id={props.id} action='#' name={props.id} noValidate onSubmit={props.handleSubmit} >
                <fieldset className="search__fieldset">
                    <div className="search__flex">
                        <div className="search__container">
                            <img className="search__img" src={search} alt="Поиск" />
                            <label className="search__label" htmlFor="input">
                                <input className="search__input" 
                                type="text" 
                                id='input' 
                                minLength='2' 
                                maxLength='30' 
                                required 
                                placeholder="Фильм" 
                                aria-labelledby="input-btn"
                                value={props.keyWord}
                                onChange={handleChange}
                                onFocus={handleFocus}
                                onBlur={handleBlur} />
                            </label>
                            <button disabled={props.keyWord === ''} className={`search__button ${props.keyWord === '' && isFocused && 'search__button_inactive'}`} type='submit' id='input-btn' >Найти</button>
                        </div>
                        <span className="search__error">{props.keyWord === '' && isFocused && 'Нужно ввести ключевое слово'}</span>
                    </div>
                    <FilterCheckbox handleCheckbox={props.handleCheckbox} isChecked={props.isChecked} />
                </fieldset>
            </form>
        </section>
    )
}

export default SearchForm;