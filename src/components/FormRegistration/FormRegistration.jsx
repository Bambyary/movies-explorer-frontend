import React from "react";
import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg';
import './FormRegistration.css';

function FormRegistration (props) {
    return (
        <main className="form-registration" id={props.name}>
            <Link className="form-registration__link"to='/'><img className="form-registration__logo" src={logo} alt="Логотип" /></Link>
            <h1 className="form-registration__title">{props.title}</h1>
            <form className="form-registration__form" name={props.name}>
                {props.children}
            </form>
            <button className="form-registration__button" type='submit'>{props.button}</button>
            <div className="form-registration__container">
                <p className="form-registration__text">{props.text}</p>
                <Link className="form-registration__link" to={props.path}>{props.link}</Link>
            </div>
        </main>
    )
}

export default FormRegistration;