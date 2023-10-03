import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Main from '../Main/Main';
import NotFound from '../NotFound/NotFound';
import Login from '../Login/Login';
import Register from '../Register/Register';
import Profile from '../Profile/Profile';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import { getToken } from '../../utils/MainApi';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import { getMovies } from '../../utils/MoviesApi';
import { createFilm, getFilms, deleteFilm } from '../../utils/MainApi';
import { getFilmsToShow } from '../../utils/constants';

function App() {

  const [isLoggedIn, setIsLoggedIn] = React.useState(false); // Пользователь авторизован/неавторизован
  const [currentUser, setCurrentUser] = React.useState({}); // Сохраняем данные пользователя
  const [authCheckComplete, setAuthCheckComplete] = React.useState(false); // Для одновременного срабатывания роутов
  const [isChecked, setIsChecked] = React.useState(false); // Чекбокс авктивен/неактивен
  const [films, setFilms] = React.useState([]); // Сохраняем фильмы со стороннего апи в локальное хранилище
  const [isLoading, setIsLoading] = React.useState(false); // Прелоадер активен/неактивен
  const [errorText, setErrorText] = React.useState(''); // Устанавливаем текст ошибки
  const [filmsToShow, setFilmsToShow] = React.useState(0); // Стейт отвечает за количество фильмов на странице
  const [savedFilms, setSavedFilms] = React.useState([]); //Сохраняем фильмы для страницы "Сохранённые фильмы"

  //Функция, которая пробрасывает токен на сервер для авторизации пользователя
  function tokenCheck () {
    if(localStorage.getItem('token')) {
      const token = localStorage.getItem('token');
      getToken(token)
      .then(data => {
        if(data) {
          setCurrentUser({
            name: data.name,
            email: data.email,
            id: data._id,
          })
          setIsLoggedIn(true);
        } else {
          return data;
        }
      })
      .catch(err => {
        setIsLoggedIn(false);
        console.log(`Произошла ошибка ${err}`);
      })
      .finally(() => setAuthCheckComplete(true));
    } else {
      setAuthCheckComplete(true);
    }
  }

  React.useEffect(() => {

    //Запускаем функцию с токеном
    tokenCheck();

    if (isLoggedIn) {

      setIsLoading(true);

        // Получаем фильмы со стороннего апи
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

    //GET-запрос на получаение фильмов со своего апи
      getFilms()
      .then(data => {
        setSavedFilms(data);
      })
      .catch(err => console.log(`Возникла ошибка ${err}`))
    }

    setFilmsToShow(getFilmsToShow());

}, [isLoggedIn])

//POST-запрос на сервер для добавления карточки с фильмом
function clickAddFilm (data) {
  createFilm(data)
  .then(data => {
    setSavedFilms([data, ...savedFilms])
  })
  .catch(err => console.log(`Возникла ошибка ${err}`))
}

//Функция удаления карточки
function clickDeleteFilm (data) {
  deleteFilm(data._id)
      .then(data => {
        setSavedFilms(state => state.filter(item => item._id !== data._id))
      })
      .catch(err => console.log(`Возникла ошибка ${err}`))
}


  return (
    <div className='app'>
      {authCheckComplete && (
        <CurrentUserContext.Provider value={currentUser}>
          <Routes>
            <Route path='/' element={ <Main isLoggedIn={isLoggedIn} />} />
            <Route path='*' element={<NotFound />} />
            <Route path='signin' element={<ProtectedRoute element={Login} isLoggedIn={!isLoggedIn} setIsLoggedIn={setIsLoggedIn} />} />
            <Route path='signup' element={<ProtectedRoute element={Register} isLoggedIn={!isLoggedIn} setIsLoggedIn={setIsLoggedIn} />} />
            <Route path='/profile' element={<ProtectedRoute element={Profile} isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} setCurrentUser={setCurrentUser} setSavedFilms={setSavedFilms} />} />
            <Route path='/movies' element={<ProtectedRoute element={Movies} 
              isLoggedIn={isLoggedIn}
              isChecked={isChecked}
              setIsChecked={setIsChecked}
              films={films}
              setErrorText={setErrorText}
              errorText={errorText}
              isLoading={isLoading}
              setFilmsToShow={setFilmsToShow}
              getFilmsToShow={getFilmsToShow}
              filmsToShow={filmsToShow}
              savedFilms={savedFilms}
              onClickSave={clickAddFilm}
              onClickDelete={clickDeleteFilm} />} />
            <Route path='/saved-movies' element={<ProtectedRoute element={SavedMovies} 
              isLoggedIn={isLoggedIn}
              isChecked={isChecked}
              setIsChecked={setIsChecked}
              savedFilms={savedFilms}
              onClickDelete={clickDeleteFilm}
              setErrorText={setErrorText}
              errorText={errorText} />} />
          </Routes>
        </CurrentUserContext.Provider>
      )}
    </div>
  );
}


export default App;
