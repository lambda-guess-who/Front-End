import { axiosWithAuth } from '../axiosAuth';

const LOGIN_ENDPOINT = 'https://lambda-guess-who.herokuapp.com/api/auth/login';
const SIGNUP_ENDPOINT = 'https://lambda-guess-who.herokuapp.com/api/auth/register';

export const LOGIN_START = "LOGIN_START"; 
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";

export const signup = user => dispatch => {
    dispatch({ type: LOGIN_START })
    axiosWithAuth()
        .post(SIGNUP_ENDPOINT, user)
        .then(res => {
            console.log(res)
        })
        .catch(err => {
            console.log(err)
        })
}