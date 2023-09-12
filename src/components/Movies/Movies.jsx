import React from "react";
import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import Footer from "../Footer/Footer";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import '../Main/Main.css';

function Movies (props) {
    return (
        <>
            <Header isLoggedIn={props.isLoggedIn} />
            <main className="main">
                <SearchForm />
                <MoviesCardList />
                <section className="main__button-container">
                    <button className="main__button" type="button">Ещё</button>
                </section>
            </main>
            <Footer />
        </>
    )
}

export default Movies;