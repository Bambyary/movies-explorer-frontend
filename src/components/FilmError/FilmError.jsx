import React from "react";
import './FilmError.css';

function FilmError (props) {
    return (
        <section className="film-error">
            <p className="film-error__text">{props.keyWord === '' ? '' : props.errorText}</p>
        </section>
    )
}

export default FilmError;