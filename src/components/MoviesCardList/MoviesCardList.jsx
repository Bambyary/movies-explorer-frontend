import React from "react";
import './MoviesCardList.css';
import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList () {
    return (
        <section className="card-list">
            <ul className="card-list__container">
                <MoviesCard title='33 слова о дизайне' />
                <MoviesCard title='Киноальманах «100 лет дизайна»' />
                <MoviesCard title='В погоне за Бенкси' />
            </ul>
            
        </section>
    )
}

export default MoviesCardList;