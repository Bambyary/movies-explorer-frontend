const BASE_URL = 'http://127.0.0.1:3000';
// const BASE_URL = 'https://api.sorokina-diplom.nomoredomainsicu.ru';

//Запрос к серверу на регистрацию
export function register (name, email, password) {
    return fetch(`${BASE_URL}/signup`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            name,
            email,
            password
        })
    })
    .then(res => {
        if(res.ok) {
            return res.json();
        } else {
            return res.status;
        }
    })
    .then(data => {
        if(data.token) {
            localStorage.setItem('token', data.token);
            return data;
        } else {
            return data;
        }
    })
}

//Запрос к серверу на авторизацию
export function authorize ( email, password ) {
    return fetch(`${BASE_URL}/signin`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({email, password})
    })
    .then(res => {
        if(res.status === 200) {
            return res.json();
        } else {
            return res.status;
        }
    })
    .then(data => {
        if(data.token) {
            localStorage.setItem('token', data.token);
            return data;
        } else {
            return data;
        }
    })
}

//Запрос к серверу за токеном
export function getToken (token) {
    return fetch(`${BASE_URL}/users/me`, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            authorization: `Bearer ${token}`
        }
    })
    .then(res => {
        if(res.status === 200) {
            return res.json();
        } else {
            return res.status;
        }
    })
    .then(data => data)
}

//Запрос к серверу для изменения данных
export function editProfile (name, email) {
    return fetch(`${BASE_URL}/users/me`, {
        method: 'PATCH',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            authorization: `Bearer ${localStorage.getItem('token')}`
        },
        body: JSON.stringify({name, email})
    })
    .then(res => {
        if(res.ok) {
            return res.json()
        } else {
            return res.status;
        }
    })
    .then(data => data)
}

//Запрос к серверу на создание фильма
export function createFilm (data) {
 return fetch(`${BASE_URL}/movies`, {
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        authorization: `Bearer ${localStorage.getItem('token')}`
    },
    body: JSON.stringify({
        country: data.country, 
        director: data.director,
        duration: data.duration,
        year: data.year,
        description: data.description,
        image: 'https://api.nomoreparties.co' + data.image.url,
        trailerLink: data.trailerLink,
        thumbnail: 'https://api.nomoreparties.co' + data.image.formats.thumbnail.url,
        movieId: data.id,
        nameRU: data.nameRU,
        nameEN: data.nameEN
    })
 })
 .then(res => {
    if(res.ok) {
        return res.json();
    } else {
        return res.status;
    }
 })
 .then(data => data);
}

//Запрос к серверу на получение карточек с фильмами
export function getFilms () {
    return fetch(`${BASE_URL}/movies`, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            authorization: `Bearer ${localStorage.getItem('token')}`
        }
    })
    .then(res => {
        if(res.ok) {
            return res.json()
        } else {
            return [];
        }
    })
    .then(data => data)
}

export function deleteFilm (movieID) {
    return fetch(`${BASE_URL}/movies/${movieID}`, {
        method: 'DELETE',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            authorization: `Bearer ${localStorage.getItem('token')}`
        }
    })
    .then(res => {
        if(res.ok) {
            return res.json()
        } else {
            return res.status;
        }
    })
}