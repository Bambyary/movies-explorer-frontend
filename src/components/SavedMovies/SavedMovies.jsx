import React from "react";
import '../Main/Main.css';
import Header from "../Header/Header";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";
import Footer from "../Footer/Footer";

function SavedMovies(props) {
    return (
      <>
        <Header isLoggedIn={props.isLoggedIn} />
        <main className="main main_margin">
          <SearchForm />
          <MoviesCardList />
        </main>
        <Footer />
      </>
    );
  }
  
  export default SavedMovies;