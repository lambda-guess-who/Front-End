import * as actions from '../actions';

export const initialState = {
    username: '',
    token: '',
    signingUp: false,
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
                error: '',
                // token: localStorage.getItem("token")

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
    
    }
}