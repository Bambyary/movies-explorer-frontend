import React from "react";
import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg';
import '../Register/Register.css';

function FormRegistration (props) {
    return (
        <section className="register" id={props.name}>
            <Link className="register__link"to='/'><img className="register__logo" src={logo} alt="Логотип" /></Link>
            <h1 className="register__title">{props.title}</h1>
            <form className="register__form" name={props.name}>
                {props.children}
            </form>
            <button className="register__button" type='submit'>{props.button}</button>
            <div className="register__container">
                <p className="register__text">{props.text}</p>
                <Link className="register__link" to={props.path}>{props.link}</Link>
            </div>
        </section>
    )
}

export default FormRegistration;