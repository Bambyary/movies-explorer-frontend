import React from "react";
import './SearchForm.css';
import search from '../../images/search.svg';
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";

function SearchForm (props) {

    //Создаём функцию, которая будет записывать значение поля ввода в соответствующую переменную
    function handleChange (e) {
        props.setKeyWord(e.target.value);
    }

    return (
        <section className="search">
            <form className="search__form" id={props.id} action='#' name={props.id} noValidate onSubmit={props.handleSubmit} >
                <fieldset className="search__fieldset">
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
                            onChange={handleChange} />
                        </label>
                        <button className="search__button" type='submit' id='input-btn' >Найти</button>
                    </div>
                    <FilterCheckbox />
                </fieldset>
            </form>
        </section>
    )
}

export default SearchForm;