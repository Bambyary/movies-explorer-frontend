import React from "react";
import './MoviesCard.css';
import film from '../../images/film.svg';
import save from '../../images/save.svg';
import clear from '../../images/delete.svg';
import { useLocation } from 'react-router-dom';

function MoviesCard () {

    const [isSaved, setIsSaved] = React.useState(true);

    const location = useLocation();

    return (
        <section className="card">
            <img className="card__img" src={film} alt="Карточка с фильмом" />

            {isSaved ?    
                (location.pathname === '/movies' && <button className="card__button-save" type="button"><img className="card__img-save" src={save} alt="Фильм сохранён" /></button>)
                :
                (location.pathname === '/movies' && <button className="card__button" type="button">Сохранить</button>)
                }
            
            {location.pathname === '/saved-movies' && <button className="card__button-save" type="button"><img className="card__img-save" src={clear} alt="Удаление фильма" /></button>}

            <div className="card__info">
                <h2 className="card__title">Киноальманах «100 лет дизайна»</h2>
                <p className="card__time">1ч 17м</p>
            </div>
        </section>
    )
}

export default MoviesCard;