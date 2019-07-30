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
        <div className="game-container">
            <Tweet />
            <Tweeters />
            <button onClick={fetchTwitter}>Get Twitter Test</button>
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