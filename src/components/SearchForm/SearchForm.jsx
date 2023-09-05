import React from "react";
import './SearchForm.css';
import search from '../../images/search.svg';
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";

function SearchForm () {
    return (
        <form className="search-form">
            <fieldset className="search-form__fieldset">
                <img className="search-form__img" src={search} alt="Поиск" />
                <label className="search-form__label" htmlFor="input">
                    <input className="search-form__input" type="text" id='input' minLength='2' required placeholder="Фильм" />
                    <button className="search-form__button" type='button'>Найти</button>
                </label>
                <FilterCheckbox />
            </fieldset>
        </form>
    )
}

export default SearchForm;