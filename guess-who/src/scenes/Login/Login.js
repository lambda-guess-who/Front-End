import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { login, getUserId } from '../../actions';

import './styles.scss';

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
            let parseToken = function parseJwt (token) {
                var base64Url = token.split('.')[1];
                var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
                var jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
                    return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
                }).join(''));
            
                return JSON.parse(jsonPayload);
            };
            console.log("props.token: ", props.token);
            console.log("local storage token: ", localStorage.getItem("token"));
            let parsedToken = parseToken(localStorage.getItem("token"))
            console.log("parsedToken: ", parsedToken);
            console.log("parsedToken.user.id: ", parsedToken.user.id);
            let pTokenId = parsedToken.user.id
            console.log("pTokenId: ", pTokenId);
            // props.getUserId(parsedToken.user.id);
            props.getUserId(pTokenId);
            console.log("props.userID: ", props.userID);
            props.history.push("/dashboard")
        }});
    }

    return (
        <div className='loginContainer'>
            <form onSubmit={submit}>
                <div className='thankYou'>
                    {props.welcomeMesage && <h3>{`${props.welcomeMesage}!`}</h3>}
                </div>
                <div className='loginHeader'>
                <h1>Login</h1> 
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
                    <button>Login</button> 
                    <span>Don't have an account?
                        <Link to="/signup">Signup Here</Link>
                        {props.error && <h3>{props.error}</h3>}   
                    </span>
                    <img src='https://i.imgur.com/MgaUp0G.png' alt='' />
                </div>
            </form>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        ...state,
        error: state.error,
        welcomeMesage: state.welcome,
        userID: state.userID,
        token: state.token
    }
}

export default connect(
    mapStateToProps,
    { login, getUserId }
)(Login);