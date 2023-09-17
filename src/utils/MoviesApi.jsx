const BASE_URL ='https://api.nomoreparties.co/beatfilm-movies';

export function getMovies () {
    return fetch(`${BASE_URL}`, {
        headers: {
            authorization: `Bearer ${localStorage.getItem('token')}`,
            "content-type": 'application/json; charset=UTF-8'
        }
    })
    .then(res => {
        if (res.ok) {
            return res.json()
        } else {
            return res.status;
        }
    })
    .then(data => data);
}