import React from "react";
import './MoviesCardList.css';
import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList () {
    return (
        <section className="card-list">
            <MoviesCard />
            <MoviesCard />
            <MoviesCard />
        </section>
    )
}

export default MoviesCardList;