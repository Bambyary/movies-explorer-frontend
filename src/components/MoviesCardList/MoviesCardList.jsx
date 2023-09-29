import React from "react";
import './MoviesCardList.css';
import MoviesCard from "../MoviesCard/MoviesCard";
import Preloader from '../Preloader/Preloader';

function MoviesCardList ({films, ...props}) {

    // Функция сравнивает id сохранённого фильма с id фильма на странице
    function compareFilm (savedFilms, film) {
        return savedFilms.find(item => item.movieId === film.id);
    }
    
    return (
        <section className="card-list">
        {props.isLoading ?
        <Preloader />
        :
        <ul className="card-list__container">
            {films.length > 0 && 
            films.map((film) => {
                return (
                    <MoviesCard 
                        key={props.isSavedFilms ? film._id : film.id} 
                        filmData={film}
                        onClickSave={props.onClickSave}
                        onClickDelete={props.onClickDelete}
                        isSavedFilms={props.isSavedFilms}
                        savedFilms={props.savedFilms}
                        isSaved={compareFilm(props.savedFilms, film)} 
                        />
                )
            })
            }
        </ul>}
            
        </section>
    )
}

export default MoviesCardList;