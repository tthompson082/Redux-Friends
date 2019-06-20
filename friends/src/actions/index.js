

import { axiosWithAuth } from '../utils/axiosWithAuth';

export const LOGIN = 'LOGIN';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILED = 'LOGIN_FAILED';

export const login = credentials => dispatch => {
    dispatch({ type: LOGIN });
    return axiosWithAuth()
        .post(`/login`, credentials)
        .then(res => {
            localStorage.setItem('token', res.data.payload)
            console.log(res)
            dispatch({ type: LOGIN_SUCCESS });
            return true;
        })
        .catch(err => dispatch({ type: LOGIN_FAILED, payload: err}))
};

export const FETCHING_DATA = 'FETCHING_DATA';
export const FETCHING_SUCCESS = 'FETCHING_SUCCESS';
export const FETCHING_FAILURE = 'FETCHING_FAILURE';

export const getFriends = () => dispatch => {
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

export const ADD_FRIEND = 'ADD_FRIEND';
export const ADD_SUCCESS = 'ADD_SUCCESS';
export const ADD_FAILED = 'ADD_FAILED';

export const addFriend = friend => dispatch => {
    console.log(friend)
    dispatch({ type: ADD_FRIEND });
    return axiosWithAuth()
    .post('/friends', friend)
    .then(res => {
        console.log(res)
        dispatch({ type: ADD_SUCCESS, payload: res.data })
        return true;
    })
    .catch(err => {
        console.log(err.response);
        dispatch({ type: ADD_FAILED, payload: err.response })
    })
}