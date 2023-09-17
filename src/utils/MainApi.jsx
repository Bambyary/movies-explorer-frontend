const BASE_URL = 'http://127.0.0.1:3000';

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
            console.log(data.token)
            localStorage.setItem('token', data.token);
            return data;
        } else {
            return data;
        }
    })
}

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