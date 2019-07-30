import React, { useState } from 'react';
import { connect } from 'react-redux';

import { login } from '../../actions';

const Login = props => {
    
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
        props.login(formState);
        props.history.push("/dashboard")
        setFormState({
            username: "",
            password: ""
        })

    }

    return (
        <form onSubmit={submit}>
            <h1>Login</h1>
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
            <button>Login</button>
        </form>
    );
};

const mapStateToProps = state => {
    return {
        ...state
    }
}

export default connect(
    mapStateToProps,
    { login }
)(Login);