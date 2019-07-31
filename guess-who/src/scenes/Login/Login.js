import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

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
        props.login(formState).then(isLoggedIn => {
            if(isLoggedIn) {
                setFormState({
                    username: "",
                    password: ""
                })
            props.history.push("/dashboard")
        }});
    }

    return (
        <form onSubmit={submit}>
            {props.welcomeMesage && <h3>{`${props.welcomeMesage}!`}</h3>}
            <h1>Login</h1>
            <label htmlFor="username">Username:</label>
            <input
                type="username"
                id="username"
                name="username"
                placeholder="username"
                value={formState.username}
                onChange={handleChanges}
                autoComplete="off"
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
            <span>Don't have an account?</span>
            <Link to="/signup">Signup Here</Link>
            {props.error && <h3>{props.error}</h3>}
        </form>
    );
};

const mapStateToProps = state => {
    return {
        ...state,
        error: state.error,
        welcomeMesage: state.welcome
    }
}

export default connect(
    mapStateToProps,
    { login }
)(Login);