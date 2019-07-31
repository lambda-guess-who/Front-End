import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import { getTwitter, postScore } from '../../actions';

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
    }, [props.tweet])

    const checkAnswer = (uAnswer, cAnswer) => {
        if(uAnswer === cAnswer) {
            console.log("something");
            setScore(score + 1);
        }
    }

    const pickAnswer = () => {

    }

    const sendScore = () => {
        
    }

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
                    <button onClick={() => checkAnswer(userAnswer, props.correctAnswer)}>Check answer</button>
                </div>
                <p>{score}</p>
                <p>{props.highScore}</p>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        ...state,
        tweet: state.tweet,
        tweeters: state.tweeters,
        correctAnswer: state.answer,
        highScore: state.highScore
    }
}

export default connect(
    mapStateToProps,
    { getTwitter, postScore }
)(Game);