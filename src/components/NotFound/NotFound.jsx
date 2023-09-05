import React from "react";
import './NotFound.css';
import { Link } from 'react-router-dom';

function NotFound () {
    return (
        <section className="error">
            <div className="error__container">
                <h1 className="error__title">404</h1>
                <p className="error__text">Страница не найдена</p>
            </div>
            <Link className="error__link" to='/'>Назад</Link>
        </section>
    )
}

export default NotFound;