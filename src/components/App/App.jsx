import React from 'react';
import './App.css';
import { Route, Routes} from 'react-router-dom';
import Main from '../Main/Main';
import NotFound from '../NotFound/NotFound';
import Login from '../Login/Login';
import Register from '../Register/Register';
import Profile from '../Profile/Profile';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import { getToken } from '../../utils/MainApi';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

function App() {

  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const [userInfo, setUserInfo] = React.useState({});

  React.useEffect(() => {
    tokenCheck();
  }, [isLoggedIn])

  //Функция, которая пробрасывает токен на сервер для авторизации пользователя
  function tokenCheck () {
    if(localStorage.getItem('token')) {
      const token = localStorage.getItem('token');
      getToken(token)
      .then(data => {
        if(data) {
          setUserInfo({
            name: data.name,
            email: data.email
          })
          setIsLoggedIn(true);
        } else {
          return data;
        }
      })
      .catch(err => {
        setIsLoggedIn(false);
        return `Произошла ошибка ${err}`
      })
    }
  }

  return (
    <div className='app'>
      <CurrentUserContext.Provider value={userInfo}>
        <Routes>
          <Route path='/' element={ <Main isLoggedIn={isLoggedIn} />} />
          <Route path='*' element={<NotFound />} />
          <Route path='/signin' element={<Login setIsLoggedIn={setIsLoggedIn} setUserInfo={setUserInfo} />} />
          <Route path='signup' element={<Register setIsLoggedIn={setIsLoggedIn} setUserInfo={setUserInfo} />} />
          <Route path='/profile' element={<Profile isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} setUserInfo={setUserInfo} />} />
          <Route path='/movies' element={<Movies isLoggedIn={isLoggedIn} />} />
          <Route path='/saved-movies' element={<SavedMovies isLoggedIn={isLoggedIn} />} />
        </Routes>
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
