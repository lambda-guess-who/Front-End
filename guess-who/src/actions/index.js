import { axiosWithAuth } from '../axiosAuth';

// const RICHMOND_GAME_ENDPOINT = 'https://guessthrowawaymvp.somethingtechie.com/api/quickgame/catid/count';
// const RICHMOND_CATEGORIES_ENDPOINT = 'https://guessthrowawaymvp.somethingtechie.com/api/categories';

const LOGIN_ENDPOINT = 'https://lambda-guess-who.herokuapp.com/api/auth/login';
const SIGNUP_ENDPOINT = 'https://lambda-guess-who.herokuapp.com/api/auth/register';
const TWITTER_ENDPOINT = 'https://lambda-guess-who.herokuapp.com/api/question';
const HIGH_SCORE_ENDPOINT = 'https://lambda-guess-who.herokuapp.com/api/user/highscore/';

export const SIGNUP_START = "SIGNUP_START"; 
export const SIGNUP_SUCCESS = "SIGNUP_SUCCESS";
export const SIGNUP_FAILURE = "SIGNUP_FAILURE";

export const signup = user => dispatch => {
    dispatch({ type: SIGNUP_START })
    axiosWithAuth()
        .post(SIGNUP_ENDPOINT, user)
        .then(res => {
            // console.log("res: ", res)
            dispatch({ type: SIGNUP_SUCCESS, payload: res.data })
        })
        .catch(err => {
            console.log("err: ",err)
            dispatch({ type: SIGNUP_FAILURE, payload: err })
        })
}

export const LOGIN_START = "LOGIN_START"; 
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";

export const login = user => dispatch => {
    dispatch({ type: LOGIN_START })
    return axiosWithAuth()
        .post(LOGIN_ENDPOINT, user)
        .then(res => {
            console.log("login res: ", res)
            localStorage.setItem("username", user.username)
            localStorage.setItem("token", res.data.token)
            // dispatch({ type: LOGIN_SUCCESS, payload: res.data.token })
            return true
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
            dispatch({ type: GET_TWITTER_SUCCESS, payload: res.data})
        })
        .catch(err => {
            console.log(err);
            // dispatch({ type: GET_TWITTER_, payload: err}
        })
}

export const HIGH_SCORE = 'HIGH_SCORE';
export const PARSE_TOKEN = 'PARSE_TOKEN';

export const setNewHighScore = newHighScore => dispatch => {
    dispatch({ type: HIGH_SCORE, payload: newHighScore })
}

// export const parseToken = token => dispatch => {
//     function parseJwt (token) {
//         var base64Url = token.split('.')[1];
//         var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
//         var jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
//             return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
//         }).join(''));
//         return JSON.parse(jsonPayload);
//     }
//     let parsedToken = parseJwt(token);
//     dispatch({ type: PARSE_TOKEN, payload: parsedToken.user.id })
// }

export const POST_SCORE_START = 'POST_SCORE_START';
export const POST_SCORE_SUCCESS = 'POST_SCORE_SUCCESS';
export const POST_SCORE_FAILURE = 'POST_SCORE_FAILURE';

export const postScore = (id, highScore) => dispatch => {
    console.log('highscore bois and gals: ', highScore)
    dispatch({ type: POST_SCORE_START })
    axiosWithAuth()
        .put(`${HIGH_SCORE_ENDPOINT}${id}`, {highscore: highScore})
        .then(res => {
            console.log(res);
            // dispatch({ type: POST_SCORE_SUCCESS, payload: res.data });
        })
        .catch(err => {
            console.log(err);
            // dispatch({ type: POST_SCORE_FAILURE, payload: err })
        })
}

export const GET_SCORE_START = 'GET_SCORE_START';
export const GET_SCORE_SUCCESS = 'GET_SCORE_SUCCESS';
export const GET_SCORE_FAILURE = 'GET_SCORE_FAILURE';

export const getScore = id => dispatch => {
    dispatch({ type: GET_SCORE_START })
    axiosWithAuth()
        .get(`${HIGH_SCORE_ENDPOINT}${id}`)
        .then(res => {
            console.log("getScore res", res);
        })
        .catch(err => {
            console.log(err);
        })
}

// export const GET_USER_START = 'GET_USER_START';
// export const GET_USER_SUCCESS = 'GET_USER_SUCCESS';
// export const GET_USER_FAILURE = 'GET_USER_FAILURE';

// export const getUser = id => dispatch => {
//     dispatch({ type: GET_USER_START })
//     axiosWithAuth()
//         .get(`https://lambda-guess-who.herokuapp.com/api/user/${id}`)
//         .then(res => {
//             console.log("getUser res: ", res);
//         })
//         .catch(err => {
//             console.log(err);
//         })
// }

