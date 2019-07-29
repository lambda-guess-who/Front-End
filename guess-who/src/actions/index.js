import { axiosWithAuth } from '../axiosAuth';

const LOGIN_ENDPOINT = 'https://lambda-guess-who.herokuapp.com/api/auth/login';
const SIGNUP_ENDPOINT = 'https://lambda-guess-who.herokuapp.com/api/auth/register';

export const SIGNUP_START = "SIGNUP_START"; 
export const SIGNUP_SUCCESS = "SIGNUP_SUCCESS";
export const SIGNUP_FAILURE = "SIGNUP_FAILURE";

export const signup = user => dispatch => {
    dispatch({ type: LOGIN_START })
    console.log(user);
    axiosWithAuth()
        .post(SIGNUP_ENDPOINT, user)
        .then(res => {
            // localStorage.setItem("token", )
            console.log(res)
            // dispatch({ type: SIGNUP_SUCCESS, payload: res.data })
        })
        .catch(err => {
            console.log(err)
            // dispatch({ type: SIGNUP_FAILURE, payload: res.data })
        })
}

export const LOGIN_START = "LOGIN_START"; 
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";

export const login = user => dispatch => {
    dispatch({ type: LOGIN_START })
    axiosWithAuth()
        .post(LOGIN_ENDPOINT, user)
        .then(res => {
            console.log(res)
        })
        .catch(err => {
            console.log(err)
        })
}