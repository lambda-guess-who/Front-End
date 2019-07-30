import React, { useState } from 'react';
import { connect } from 'react-redux';

import { signup } from '../../actions';

const Signup = props => {
    
    const [formState, setFormState] = useState({
        username: "",
        password: "",
    })
    
    const handleChanges = e => {
        e.preventDefault();
        setFormState({
            ...formState,
            [e.target.name]: e.target.value
        })
    }


    const submit = e => {
        e.preventDefault();
        props.signup(formState);
        props.token ? props.history.push("/dashboard") : props.history.push("/")
        setFormState({
            username: "",
            password: ""
        })

    }

    // console.log("signup props: ", props);

    return (
        <form onSubmit={submit}>
            <h1>Signup</h1>
            <label htmlFor="username">Username:</label>
            <input
                type="username"
                id="username"
                name="username"
                placeholder="username"
                value={formState.username}
                onChange={handleChanges}
                required
            />
            <label htmlFor="password">Password:</label>
            {console.log(formState.password)}
            <input
                type="password"
                id="password"
                name="password"
                placeholder="password"
                value={formState.password}
                onChange={handleChanges}
                autoComplete="off"
                required
            />
            <button>Signup</button>
        </form>
    );
};

const mapStateToProps = state => {
    return {
        ...state,
        token: state.token,
    }
}

export default connect(
    mapStateToProps,
    { signup }
)(Signup);