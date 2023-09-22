import React from "react";
import './MoviesCardList.css';
import MoviesCard from "../MoviesCard/MoviesCard";
import Preloader from '../Preloader/Preloader';

function MoviesCardList ({films, ...props}) {

    return (
        <section className="card-list">
        {props.isLoading ?
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
                        trailer={film.trailerLink}
                        id={film.id}
                        country={film.country}
                        create={film.created_at}
                        desctiption={film.description}
                        director={film.director}
                        nameRU={film.nameRU}
                        nameEN={film.nameEN}
                        update={film.updated_at}
                        year={film.year} />
                )
            })}
        </ul>}
            
        </section>
    )
}

export default MoviesCardList;