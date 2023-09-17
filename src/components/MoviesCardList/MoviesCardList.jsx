import React from "react";
import './MoviesCardList.css';
import MoviesCard from "../MoviesCard/MoviesCard";
import Preloader from '../Preloader/Preloader';

function MoviesCardList ({films, ...props}) {

    return (
        <section className="card-list">
        {props.films === {} ?
        <Preloader />
        :
        <ul className="card-list__container">
            {films.map((film) => {
                return (
                    <MoviesCard 
                        key={film.id} 
                        title={film.nameRU} 
                        image={film.image.url} 
                        duration={film.duration}
                        trailer={film.trailerLink} />
                )
            })}
        </ul>}
            
        </section>
    )
}

export default MoviesCardList;