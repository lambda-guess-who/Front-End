import * as actions from '../actions';

export const initialState = {
    username: '',
    token: '',
    tweet: '',
    tweeters: [],
    answer: '',
    signingUp: false,
    loggingIn: false,
    gettingTwitter: false,
    error: '',
    welcome: '',
    highScore: 0
};

export const reducer = (state = initialState, action) => {
    switch(action.type) {
        default:
            return state;
        case actions.SIGNUP_START: 
            return {
                ...state,
                signingUp: true,
                error: ''
            }
        case actions.SIGNUP_SUCCESS:
            return {
                ...state,
                signingUp: false,
                error: '',
                welcome: action.payload
            }
        case actions.SIGNUP_FAILURE:
            return {
                ...state,
                signingUp: false,
                error: action.payload
            }
        case actions.LOGIN_START:
            return {
                ...state,
                loggingIn: true,
                error: ''
            }
        case actions.LOGIN_SUCCESS:
            return {
                ...state,
                loggingIn: false,
                error: '',
                token: localStorage.setItem("token", action.payload),
                username: localStorage.getItem("username")                
            }
        case actions.LOGIN_FAILURE:
            return {
                ...state,
                loggingIn: false,
                error: action.payload
            }
        case actions.GET_TWITTER_START:
            return {
                ...state,
                gettingTwitter: true,
                error: '',
                tweet: '',
                tweeters: [],
                answer: ''
            }
        case actions.GET_TWITTER_SUCCESS:
            return {
                ...state,
                gettingTwitter: false,
                error: '',
                tweet: action.payload.question,
                tweeters: action.payload.candidates,
                answer: action.payload.answer
            }
        case actions.GET_TWITTER_FAILURE:
            return {
                ...state,
                gettingTwitter: false,
                error: action.payload
            }
    }
}