import * as actions from '../actions';

export const initialState = {
    username: '',
    token: '',
    signingUp: false,
    loggingIn: false,
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
                // token: localStorage.setItem("token", action.payload)
            }
        case actions.LOGIN_FAILURE:
            return {
                ...state,
                loggingIn: false,
                error: action.payload
            }
    
    }
}