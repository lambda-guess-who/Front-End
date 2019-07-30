import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { getTwitter } from '../../actions';

import './Game.css';
import Tweet from './Tweet/Tweet.js';
import Tweeters from './Tweeters/Tweeters.js'

const Game = props => { 

    const fetchTwitter = e => {
        e.preventDefault();
        props.getTwitter();
    }
    // useEffect(() => {
    //     fetchTwitter()
    // }, [])

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
        tweeters: state.tweeters
    }
}

export default connect(
    mapStateToProps,
    { getTwitter }
)(Game);