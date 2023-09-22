import React from "react";
import './FilterCheckbox.css';

function FilterCheckbox (props) {
    return (
        <label className="filter-checkbox" htmlFor="checkbox">
            <input onChange={props.handleCheckbox} checked={props.isChecked} className="filter-checkbox__checkbox" id='checkbox' type="checkbox" />
            <span className="filter-checkbox__span">Короткометражки</span>
        </label>
    )
}

export default FilterCheckbox;