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
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import Preloader from '../Preloader/Preloader';

function App() {

  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const [currentUser, setCurrentUser] = React.useState({});
  const [authCheckComplete, setAuthCheckComplete] = React.useState(false);
  const [isChecked, setIsChecked] = React.useState(false);

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

  //Функция для чекбокса 
  function handleCheckbox () {
    setIsChecked(!isChecked)
    localStorage.setItem('checked', !isChecked);
}


  return (
    <div className='app'>
      {authCheckComplete ? (
        <CurrentUserContext.Provider value={currentUser}>
          <Routes>
            <Route path='/' element={ <Main isLoggedIn={isLoggedIn} />} />
            <Route path='*' element={<NotFound />} />
            <Route path='/signin' element={<Login setIsLoggedIn={setIsLoggedIn} />} />
            <Route path='signup' element={<Register setIsLoggedIn={setIsLoggedIn} />} />
            <Route path='/profile' element={<ProtectedRoute element={Profile} isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} setCurrentUser={setCurrentUser} />} />
            <Route path='/movies' element={<ProtectedRoute element={Movies} 
              isLoggedIn={isLoggedIn}
              isChecked={isChecked}
              handleCheckbox={handleCheckbox}
              setIsChecked={setIsChecked} />} />
            <Route path='/saved-movies' element={<ProtectedRoute element={SavedMovies} 
              isLoggedIn={isLoggedIn}
              isChecked={isChecked}
              handleCheckbox={handleCheckbox}
              setIsChecked={setIsChecked} />} />
          </Routes>
        </CurrentUserContext.Provider>
      ) : (
        <Preloader />
      )}
    </div>
  );
}


export default App;
