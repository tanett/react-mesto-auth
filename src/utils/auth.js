export const AUTH_URL = 'https://auth.nomoreparties.co';

export const register = (email, passw) => {
    return fetch(`${AUTH_URL}/signup`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            'email': email,
            "password": passw
        })

    }).then(res => {
        return res.json()
    })
        .then(res => {
            console.log(res);
            return res
        })

}

export const authorize = (login, password) => {
    return fetch(`${AUTH_URL}/signin`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({'email': login,
            "password": password})
        }
    ).then(res => res.json())
        .then(res => {
            if (res.token){
                localStorage.setItem('jwt', res.token);
                }
        return res
        })

}

export const checkToken = (token) => {
    return fetch(`${AUTH_URL}/users/me`, {
        method: 'GET',
        headers: {

            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        }
    })
        .then(res => res.json())
        .then(data => data)
}