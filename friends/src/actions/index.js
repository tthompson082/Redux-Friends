import axios from 'axios';

import { axiosWithAuth } from '../utils/axiosWithAuth';

export const LOGIN = 'LOGIN';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILED = 'LOGIN_FAILED';

export const login = () => dispatch => {
    dispatch({ type: LOGIN });
    return axiosWithAuth()
        .post(`http://localhost:5000/api/login`, { username: 'Lambda School', password: 'i<3Lambd4' })
        .then(res => {
            localStorage.setItem('token', res.data.payload)
            console.log(res)
            dispatch({ type: LOGIN_SUCCESS, payload: res.data });
        })
        .catch(err => dispatch({ type: LOGIN_FAILED, payload: err}))
};

export const FETCHING_DATA = 'FETCHING_DATA';
export const FETCHING_SUCCESS = 'FETCHING_SUCCESS';
export const FETCHING_FAILURE = 'FETCHING_FAILURE';

export const getData = () => dispatch => {
    dispatch({ type: FETCHING_DATA });
    axiosWithAuth()
    .get('/friends')
    .then(res => {
        console.log(res.data)
        dispatch({ type: FETCHING_SUCCESS, payload: res.data })
    })
    .catch(err => {
        console.log(err.response);
        dispatch({ type: FETCHING_FAILURE, payload: err.response })
    })
}