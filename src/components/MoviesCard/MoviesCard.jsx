import React from "react";
import './MoviesCard.css';
import save from '../../images/save.svg';
import clear from '../../images/delete.svg';
import { useLocation } from 'react-router-dom';

function MoviesCard (props) {

    const [isSaved, setIsSaved] = React.useState(true);
    const hours = Math.floor(props.duration / 60);
    const minutes = props.duration % 60;

    const location = useLocation();



    return (
        <li className="card">
            <a className="card__link" href={props.trailer} target='_blank' ><img className="card__img" src={`https://api.nomoreparties.co/${props.image}`} alt={props.title} /></a>

            {isSaved ?    
                (location.pathname === '/movies' && <button className="card__button-save" type="button"><img className="card__img-save" src={save} alt="Фильм сохранён" /></button>)
                :
                (location.pathname === '/movies' && <button className="card__button" type="button">Сохранить</button>)
                }
            
            {location.pathname === '/saved-movies' && <button className="card__button-save" type="button"><img className="card__img-save" src={clear} alt="Удаление фильма" /></button>}

            <div className="card__info">
                <h2 className="card__title">{props.title}</h2>
                <p className="card__time">{`${hours}ч ${minutes}м`}</p>
            </div>
        </li>
    )
}

export default MoviesCard;