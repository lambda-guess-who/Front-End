import * as actions from '../actions';

export const initialState = {
    username: '',
    password: ''
};

export const reducer = (state = initialState, action) => {
    switch(action.type) {
        default:
            return state;
    }
}