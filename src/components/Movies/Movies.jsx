import React from "react";
import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import Footer from "../Footer/Footer";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import '../Main/Main.css';
import FilmError from "../FilmError/FilmError";

function Movies (props) {

    const savedKeyWords = localStorage.getItem('textSearch');
    const [keyWord, setKeyWord] = React.useState(savedKeyWords || '');
    const savedFilms = localStorage.getItem('filteredFilms');
    const [filteredFilms, setFilteredFilms] = React.useState(JSON.parse(savedFilms) || []);

    //При клике на кнопку поиска происходит фильтрация фильмов и сохранение в localStorage
    function handleSubmit (e) {
        e.preventDefault();

        const filter = props.films.filter(film => {
            if(!props.isChecked) {
                return film.nameRU.toLowerCase().includes(keyWord.toLowerCase());
            } else {
                if(film.duration <= 40 && film.nameRU.toLowerCase().includes(keyWord.toLowerCase())) {
                    return film;
                }
            }
        })

        if(filter.length === 0) {
            props.setErrorText('Ничего не найдено');
        }

        localStorage.setItem('filteredFilms', JSON.stringify(filter));
        localStorage.setItem('textSearch', keyWord);
        setFilteredFilms(filter);
        props.setFilmsToShow(props.getFilmsToShow());
    }

    //Функция, которая добавляет определённое количество фильмов к найденным фильмам
    function handleMoreFilms () {
        const newFilmsToShow = window.innerWidth >= 550 ? props.filmsToShow + 3 : props.filmsToShow + 2;
        props.setFilmsToShow(newFilmsToShow);
    }

    return (
        <>
            <Header isLoggedIn={props.isLoggedIn} />
            <main className="main">
                <SearchForm id='search-form-movies' 
                    handleSubmit={handleSubmit} 
                    keyWord={keyWord} 
                    setKeyWord={setKeyWord}
                    handleCheckbox={props.handleCheckbox}
                    isChecked={props.isChecked}
                     />

                {filteredFilms.length > 0 ? 
                    <MoviesCardList 
                        isLoading={props.isLoading} 
                        films={filteredFilms.slice(0, props.filmsToShow)} 
                        onClickSave={props.onClickSave}
                        onClickDelete={props.onClickDelete}
                        savedFilms={props.savedFilms} />
                 :
                    <FilmError keyWord={keyWord} errorText={props.errorText} />}

                {filteredFilms.length > props.filmsToShow &&
                    <section className="main__button-container">
                        <button onClick={handleMoreFilms} className="main__button" type="button">Ещё</button>
                    </section>
                }
            </main>
            <Footer />
        </>
    )
}

export default Movies;