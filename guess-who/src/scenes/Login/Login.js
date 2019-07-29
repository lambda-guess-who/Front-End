import React, { useState } from 'react';
import { connect } from 'react-redux';

const Login = () => {
    
    // const [username, setUsername] = useState("");
    // const [password, setPassword] = useState("");
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
        setFormState({
            username: "",
            password: ""
        })

    }

    return (
        <form onSubmit={submit}>
            <label htmlFor="username">Username:</label>
            <input
                type="username"
                id="username"
                name="username"
                placeholder="username"
                value={formState.username}
                onChange={handleChanges}
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
    {}
)(Login);