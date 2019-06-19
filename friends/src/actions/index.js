import axios from 'axios';

export const LOGIN = 'LOGIN';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILED = 'LOGIN_FAILED';

export const login = () => dispatch => {
    dispatchEvent({ type: LOGIN });
    axios
        .post(`http://localhost:5000/api/login`, { username: 'Lambda School', password: 'i<3Lambd4' })
        .then(res => {
            console.log(res)
            dispatch({ type: LOGIN_SUCCESS, payload: res.data });
        })
        .catch(err => dispatch({ type: LOGIN_FAILED, payload: err}))
}