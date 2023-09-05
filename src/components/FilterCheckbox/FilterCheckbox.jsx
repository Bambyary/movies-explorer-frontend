import React from "react";
import './FilterCheckbox.css';

function FilterCheckbox () {
    return (
        <label className="filter-checkbox__label" htmlFor="checkbox">
            <input className="filter-checkbox__checkbox" id='checkbox' type="checkbox" />
            <span className="filter-checkbox__span">Короткометражки</span>
        </label>
    )
}

export default FilterCheckbox;