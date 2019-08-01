import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { getUser } from '../../actions';

import Tweet from './Tweet/Tweet';

const TryAgain = props => {
    const [prevUserObj, setPrevUserObj] = useState({});
    const [prevTweet, setPrevTweet] = useState("");

    useEffect(() => {
        setPrevUserObj(JSON.parse(localStorage.getItem("prevUserObj")));
        setPrevTweet(localStorage.getItem("prevTweet"));
        localStorage.removeItem("prevUserObj");
        localStorage.removeItem("prevTweet");
        props.getUser(props.userId);
    }, []);

    return (
        <div className ='tryAgain'>
            <h1>Game Over!</h1>
            <div className='tryAgainbuttons'>
                <Link to="/game">Play Again</Link>   
                <Link to="/dashboard">Back to Dashboard</Link> 
            </div>
            <Tweet userObject={prevUserObj} tweet={prevTweet} />
        </div>
    );
};

const mapStateToProps = state => {
    return {
        ...state,
        userId: state.userId
    }
}

export default connect(
    mapStateToProps,
    { getUser }
)(TryAgain);