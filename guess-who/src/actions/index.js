import { axiosWithAuth } from '../axiosAuth';

const LOGIN_ENDPOINT = 'https://lambda-guess-who.herokuapp.com/api/auth/login';
const SIGNUP_ENDPOINT = 'https://lambda-guess-who.herokuapp.com/api/auth/register';
const TWITTER_ENDPOINT = 'https://lambda-guess-who.herokuapp.com/api/question';

export const SIGNUP_START = "SIGNUP_START"; 
export const SIGNUP_SUCCESS = "SIGNUP_SUCCESS";
export const SIGNUP_FAILURE = "SIGNUP_FAILURE";

export const signup = user => dispatch => {
    dispatch({ type: SIGNUP_START })
    console.log("user: ", user);
    axiosWithAuth()
        .post(SIGNUP_ENDPOINT, user)
        .then(res => {
            console.log("res: ", res)
            // dispatch({ type: SIGNUP_SUCCESS, payload: res.data })
        })
        .catch(err => {
            console.log("err: ",err)
            // dispatch({ type: SIGNUP_FAILURE, payload: err })
        })
}

export const LOGIN_START = "LOGIN_START"; 
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";

export const login = user => dispatch => {
    dispatch({ type: LOGIN_START })
    // console.log("user: ", user);
    axiosWithAuth()
        .post(LOGIN_ENDPOINT, user)
        .then(res => {
            console.log("res: ", res)
            dispatch({ type: LOGIN_SUCCESS, payload: res.data.token })
        })
        .catch(err => {
            console.log("err: ", err)
            dispatch({ type: LOGIN_FAILURE, payload: 'username or password is incorrect'})
        })
}

export const GET_TWITTER_START  = "GET_TWITTER_START"; 
export const GET_TWITTER_SUCCESS  = "GET_TWITTER_SUCCESS"; 
export const GET_TWITTER_FAILURE  = "GET_TWITTER_FAILURE";  

export const getTwitter = () => dispatch => {
    dispatch({ type: GET_TWITTER_START })
    axiosWithAuth()
        .get(TWITTER_ENDPOINT)
        .then(res => {
            console.log(res);
            // dispatch({ type: GET_TWITTER_SUCCESS, payload: res.data}
        })
        .catch(err => {
            console.log(err);
            // dispatch({ type: GET_TWITTER_, payload: err}
        })
}
