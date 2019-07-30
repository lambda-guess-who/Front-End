import React from 'react';
import './Game.css';
import Tweet from './Tweet/Tweet.js';
import Tweeters from './Tweeters/Tweeters.js'

const Game = () => {
    return (
        <div className="game-container">
            <Tweet />
            <Tweeters />
        </div>
    )
}

export default Game;