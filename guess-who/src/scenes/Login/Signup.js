import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

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

    return (
        <div className='loginContainer'>
            <form onSubmit={submit}>
                <div className='loginHeader'>
                    <h1>Signup</h1>    
                    <img src ='https://iconsplace.com/wp-content/uploads/_icons/ffffff/256/png/twitter-icon-18-256.png' alt=''/>
                </div>
                <div className='username'> {/*Added classes for styling purposes*/}
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
                </div>
                <div className='password'>
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
                </div>
                <div className ='loginFooter'>
                    <button>Signup</button>
                    <span>Already have an account?
                        <Link to="/">Login Here</Link>
                        {props.error && <p>{props.error}</p>}
                    </span>
                    <img src='https://i.imgur.com/MgaUp0G.png' alt=''/>
                </div>
            </form>
        </div>
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