import React from "react";
import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import Footer from "../Footer/Footer";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import '../Main/Main.css';
import { getMovies } from "../../utils/MoviesApi";
import FilmError from "../FilmError/FilmError";

function Movies (props) {

    const [films, setFilms] = React.useState([]);
    const savedKeyWords = localStorage.getItem('textSearch');
    const [keyWord, setKeyWord] = React.useState(savedKeyWords || '');
    const savedFilms = localStorage.getItem('filteredFilms');
    const [filteredFilms, setFilteredFilms] = React.useState(JSON.parse(savedFilms) || []);
    const [filmsToShow, setFilmsToShow] = React.useState(0);
    const [errorText, setErrorText] = React.useState('');
    const [isLoading, setIsLoading] = React.useState(false);

    //Этот useEffect подтягивает данные с сервера один раз при авторизации пользователя
    React.useEffect(() => {
        if(films.length === 0) {
            setIsLoading(true);
            getMovies()
            .then(data => {
                if(data) {
                    localStorage.setItem('films', JSON.stringify(data));
                    const storedFilms = localStorage.getItem('films');
                    setFilms(JSON.parse(storedFilms))
                }
            })
            .catch(err => {
                console.log(`Возникла ошибка ${err}`)
                setErrorText('Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз')
            })
            .finally(() => {
                setIsLoading(false);  
            });

            setFilmsToShow(getFilmsToShow());
        }
    }, [films])

    //useEffect записывает в переменную состояние чекбокса
    React.useEffect(() => {
        if(localStorage.getItem('checked') === 'true') {
            props.setIsChecked(true);
        } else {
            props.setIsChecked(false);
        }
    }, [props.isChecked])

    //При клике на кнопку поиска происходит фильтрация фильмов и сохранение в localStorage
    function handleSubmit (e) {
        e.preventDefault();

        const filter = films.filter(film => {
            if(!props.isChecked) {
                return film.nameRU.toLowerCase().includes(keyWord.toLowerCase());
            } else {
                if(film.duration <= 40 && film.nameRU.toLowerCase().includes(keyWord.toLowerCase())) {
                    return film;
                }
            }
        })

        if(filter.length === 0) {
            setErrorText('Ничего не найдено');
        }

        localStorage.setItem('filteredFilms', JSON.stringify(filter));
        localStorage.setItem('textSearch', keyWord);
        setFilteredFilms(filter);
        setFilmsToShow(getFilmsToShow());
    }

    //Функция, определяющая сколько карточек отобразить
    function getFilmsToShow () {
        return window.innerWidth >= 550 ? 12 : 5;
    }

    //Функция, которая добавляет поределённое количество фильмов к найденным фильмам
    function handleMoreFilms () {
        const newFilmsToShow = window.innerWidth >= 550 ? filmsToShow + 3 : filmsToShow + 2;
        setFilmsToShow(newFilmsToShow);
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

                {filteredFilms.length !== 0 ? 
                    <MoviesCardList isLoading={isLoading} films={filteredFilms.slice(0, filmsToShow)} />
                 :
                    <FilmError keyWord={keyWord} errorText={errorText} />}

                {filteredFilms.length > filmsToShow &&
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