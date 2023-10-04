import React from "react";
import '../Main/Main.css';
import Header from "../Header/Header";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";
import Footer from "../Footer/Footer";
import FilmError from "../FilmError/FilmError";

function SavedMovies(props) {

  const [keyWord, setKeyWord] = React.useState(''); // Сохраняем ключевое слово
  const [filteredFilms, setFilteredFilms] = React.useState(props.savedFilms); // Переменная с отфильтрованными фильмами

  //useEffect записывает в переменную состояние чекбокса
  React.useEffect(() => {
    if(localStorage.getItem('checkedSave') === 'true') {
        props.setIsChecked(true);
    } else {
        props.setIsChecked(false);
    }
  }, [props.isChecked])

  //useEffect устанавливает значение для переменной filteredFilms
  React.useEffect(() => {
    if(keyWord === '') {
      setFilteredFilms(props.savedFilms);
    }
    setFilteredFilms(props.savedFilms);
  }, [props.isLoggedIn, props.savedFilms, keyWord])

  //При клике на кнопку поиска происходит фильтрация фильмов
  function handleSubmit (e) {
    e.preventDefault();

    const filter = props.savedFilms.filter(film => {
      return film.nameRU.toLowerCase().includes(keyWord.toLowerCase()) || film.nameEN.toLowerCase().includes(keyWord.toLowerCase());
    })
    
    if(filter.length === 0) {
      props.setErrorText('Ничего не найдено');
    }

    setFilteredFilms(filter);
}

//Функция для чекбокса 
function handleCheckbox () {
  props.setIsChecked(!props.isChecked)
  localStorage.setItem('checkedSave', !props.isChecked);

  if(props.isChecked) {
      return setFilteredFilms(() => {
          return props.savedFilms.filter( film => {
              return film.nameRU.toLowerCase().includes(keyWord.toLowerCase()) || film.nameEN.toLowerCase().includes(keyWord.toLowerCase());
          })
      })
  } else {
      return setFilteredFilms(() => {
          return props.savedFilms.filter( film => {
              if(film.duration <= 40) {
                  return film.nameRU.toLowerCase().includes(keyWord.toLowerCase()) || film.nameEN.toLowerCase().includes(keyWord.toLowerCase());
              }
          })
      })
  }
}

    return (
      <>
        <Header isLoggedIn={props.isLoggedIn} />
        <main className="main main_margin">
          <SearchForm id='search-form-saved-movies' 
            handleSubmit={handleSubmit} 
            keyWord={keyWord} 
            setKeyWord={setKeyWord}
            handleCheckbox={handleCheckbox} />

          {filteredFilms.length > 0 ? 
            <MoviesCardList 
              isSavedFilms={true} 
              films={filteredFilms} 
              onClickDelete={props.onClickDelete} 
              savedFilms={props.savedFilms} />
            :
            <FilmError keyWord={keyWord} errorText={props.errorText} />
          }
        </main>
        <Footer />
      </>
    );
  }
  
  export default SavedMovies;