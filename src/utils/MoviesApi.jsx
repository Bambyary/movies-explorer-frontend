const BASE_URL ='https://api.nomoreparties.co';

export function getMovies () {
    return fetch(`${BASE_URL}/beatfilm-movies`, {
        headers: {
            "content-type": 'application/json; charset=UTF-8'
        }
    })
    .then(res => {
        console.log(res)
        if (res.ok) {
            return res.json()
        } else {
            return res.status;
        }
    })
    .then(data => data);
}