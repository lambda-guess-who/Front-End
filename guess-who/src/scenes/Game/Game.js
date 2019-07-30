import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import { getTwitter } from '../../actions';

import './Game.css';
import Tweet from './Tweet/Tweet.js';
import Tweeters from './Tweeters/Tweeters.js'

const Game = props => { 

    const [score, setScore] = useState(0);
    const [userAnswer, setUserAnswer] = useState('');

    const fetchTwitter = () => {
        props.getTwitter();
    }
    useEffect(() => {
        fetchTwitter()
    }, [])

    return (
        <div className="wrapper">
            <div className="game-container">
                <div className="category-title">
                    <h1>Category</h1>
                    <p className="category">Presidential Candidates</p>
                </div>
                <Tweet />
                <Tweeters />
                <div className="twitter-btn">
                    <button onClick={fetchTwitter}>Get Twitter Test</button>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        ...state,
        tweet: state.tweet,
        tweeters: state.tweeters,
        correctAnswer: state.answer
    }
}

export default connect(
    mapStateToProps,
    { getTwitter }
)(Game);