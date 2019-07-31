import React from 'react';
import { connect } from 'react-redux';

import Header from './Header';
import Body from './Body';
import Footer from './Footer';

import './styles.scss';


const Profile = props => {
    
    const logout = () => {
        localStorage.removeItem("token")
        localStorage.removeItem("username")
        props.history.push("/")
    } 
    
    return (
        <div className='profile'>
            <Header />
            <Body username={props.username} highScore={props.highScore} />
            <Footer logout={logout} />
        </div>
    )
};

const mapStateToProps = state => {
    return {
        ...state,
        username: state.username,
        highScore: state.highScore
    }
}

export default connect(
    mapStateToProps,
    {}
)(Profile);