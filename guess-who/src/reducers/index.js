import * as actions from '../actions';

export const initialState = {
    username: '',
    token: '',
    tweet: '',
    tweeters: [],
    signingUp: false,
    loggingIn: false,
    gettingTwitter: false,
    error: ''
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
                // token: localStorage.setItem("token", action.payload),
                // username: something
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
                error: ''
            }
        case actions.GET_TWITTER_SUCCESS:
            return {
                ...state,
                gettingTwitter: false,
                error: '',
                tweet: action.payload.tweet,
                tweeters: action.payload.tweeters
            }
        case actions.GET_TWITTER_FAILURE:
            return {
                ...state,
                gettingTwitter: false,
                error: action.payload
            }
    }
}