import React from "react";
import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import Footer from "../Footer/Footer";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import '../Main/Main.css';
import { getMovies } from "../../utils/MoviesApi";

function Movies (props) {

    const [films, setFilms] = React.useState([]);
    const [keyWord, setKeyWord] = React.useState('');
    const [filteredFilms, setFilteredFilms] = React.useState([]);
    const savedFilms = localStorage.getItem('filteredFilms');
    const savedKeyWords = localStorage.getItem('textSearch');

    //Этот useEffect подтягивает данные с сервера один раз при авторизации пользователя
    React.useEffect(() => {
        if(films.length === 0) {
            getMovies()
            .then(data => {
                if(data) {
                    localStorage.setItem('films', JSON.stringify(data));
                    const storedFilms = localStorage.getItem('films');
                    setFilms(JSON.parse(storedFilms))
                }
            })
            .catch(err => console.log(`Возникла ошибка ${err}`));
        }
    }, [films])

    //При изменении savedFilms или savedKeyWords происходит обновление filteredFilms и keyWord
    React.useEffect(() => {
        setFilteredFilms(JSON.parse(savedFilms));
        setKeyWord(savedKeyWords || '');
    }, [savedFilms, savedKeyWords])

    //При клике на кнопку поиска происходит фильтрация фильмов и сохранение в localStorage
    function handleSubmit (e) {
        e.preventDefault();

        const filter = films.filter(film => {
            return film.nameRU.toLowerCase().includes(keyWord.toLowerCase());
        });

        localStorage.setItem('filteredFilms', JSON.stringify(filter));
        localStorage.setItem('textSearch', keyWord);
        setFilteredFilms(filter);
    }


    return (
        <>
            <Header isLoggedIn={props.isLoggedIn} />
            <main className="main">
                <SearchForm id='search-form-movies' handleSubmit={handleSubmit} keyWord={keyWord} setKeyWord={setKeyWord} />
                <MoviesCardList films={filteredFilms} />
                <section className="main__button-container">
                    <button className="main__button" type="button">Ещё</button>
                </section>
            </main>
            <Footer />
        </>
    )
}

export default Movies;