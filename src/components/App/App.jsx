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

function App() {

  const [isLoggedIn, setIsLoggedIn] = React.useState(true);

  return (
    <div className='app'>
      <Routes>
        <Route path='/' element={ <Main isLoggedIn={isLoggedIn} />} />
        <Route path='*' element={<NotFound />} />
        <Route path='/signin' element={<Login />} />
        <Route path='signup' element={<Register />} />
        <Route path='/profile' element={<Profile isLoggedIn={isLoggedIn} />} />
        <Route path='/movies' element={<Movies isLoggedIn={isLoggedIn} />} />
        <Route path='/saved-movies' element={<SavedMovies isLoggedIn={isLoggedIn} />} />
      </Routes>
    </div>
  );
}

export default App;
