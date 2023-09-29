import React from "react";
import './MoviesCard.css';
import save from '../../images/save.svg';
import clear from '../../images/delete.svg';
import { useLocation } from 'react-router-dom';

function MoviesCard (props) {

    const hours = Math.floor(props.filmData.duration / 60); // Выводим количество часов
    const minutes = props.filmData.duration % 60; // Выводим количество минут

    const location = useLocation();

    //Функция передаёт данные в App.jsx в clickAddFilm
    function handleClickSave () {
        if(props.isSaved) {
            props.onClickDelete(props.savedFilms.filter(item => item.movieId === props.filmData.id)[0])
        } else {
            props.onClickSave(props.filmData);
        }
    }

    // Функция передаёт данные в App.jsx в clickDeleteFilm
    function handleClickDelete () {
        props.onClickDelete(props.filmData)
    }


    return (
        <li className="card">
            <a className="card__link" href={props.filmData.trailerLink} target='_blank' >
                <img className="card__img" src={props.isSavedFilms ? props.filmData.image : `https://api.nomoreparties.co/${props.filmData.image.url}`} alt={props.title} />
            </a>

            {props.isSaved ?
                (location.pathname === '/movies' && <button className="card__button-save" type="button" onClick={handleClickSave} ><img className="card__img-save" src={save} alt="Фильм сохранён" /></button>)
                :
                (location.pathname === '/movies' && <button className="card__button" type="button" onClick={handleClickSave} >Сохранить</button>)
                }
            
            {location.pathname === '/saved-movies' && <button className="card__button-save" type="button" onClick={handleClickDelete} ><img className="card__img-save" src={clear} alt="Удаление фильма" /></button>}

            <div className="card__info">
                <h2 className="card__title">{props.filmData.nameRU}</h2>
                <p className="card__time">{`${hours}ч ${minutes}м`}</p>
            </div>
        </li>
    )
}

export default MoviesCard;