import * as actions from '../actions';

export const initialState = {
    // username: '',
    // token: '',
    userId: '',
    tweet: '',
    tweeters: [],
    answer: {},
    signingUp: false,
    loggingIn: false,
    gettingTwitter: false,
    postingScore: false,
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
                // token: ,
                // token: action.payload,
                // username: localStorage.getItem("username")                
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
        case actions.HIGH_SCORE:
            return {
                ...state,
                highScore: action.payload
            }
        case actions.POST_SCORE_START:
            return {
                ...state,
                postingScore: true,
                error: ''
            }
        case actions.POST_SCORE_SUCCESS:
            return {
                ...state,
                postingScore: false,
                error: ''
            }
        case actions.POST_SCORE_FAILURE:
            return {
                ...state,
                postingScore: false,
                error: action.payload
            }
        // case actions.PARSE_TOKEN:
        //     console.log(action.payload);
        //     return {
        //         ...state,
        //         userId: action.payload
        //     }
        case actions.GET_SCORE_START:
            return {

            }
        case actions.GET_SCORE_SUCCESS:
            return {

            }
        case actions.GET_SCORE_FAILURE:
            return {

            }
    }   
}