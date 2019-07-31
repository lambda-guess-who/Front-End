import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { getTwitter, postScore, setNewHighScore } from '../../actions';

import './Game.scss';
import Tweet from './Tweet/Tweet.js';
import Tweeters from './Tweeters/Tweeters.js'

const Game = props => { 

    const [score, setScore] = useState(0);
    const [userAnswer, setUserAnswer] = useState('');
   
    // const [answerStatus, setAnswerStatus] = useState(false)

    const fetchTwitter = () => {
        props.getTwitter();
    }
    useEffect(() => {
        fetchTwitter();
    }, [])

    const checkAnswer = (uAnswer, cAnswer) => {
        if(uAnswer === cAnswer) {
            console.log("ta-daaa!");
            setScore(score + 1);
        } else {
            if(score > props.highScore) {
                props.setNewHighScore(score)
                setScore(0);
                props.history.push("/tryagain")
            } else {
                setScore(0);
                props.history.push("/tryagain")
            }
        }
        setUserAnswer('');
    }

    const pickAnswer = tweeter => {
        setUserAnswer(tweeter.handle)
        console.log("tweeter.handle: ", tweeter.handle);
    }

    const sendScore = (username, endScore) => {
        props.postScore({ username, endScore });
    }

    // sendScore(props.username, props.highScore)

    console.log("props.tweeters: ", props.tweeters);

    return (
        <div className="wrapper">
            <div className="game-container">
                <Link to="/dashboard">
                    <img src='https://i.imgur.com/liO8kXc.png' className="dashboard-icon" alt =''/>
                </Link>
                <div className="category-title">
                    <h1>Category</h1>
                    <p className="category">Presidential Candidates</p>
                </div>
                <Tweet tweet={props.tweet} />
                <Tweeters
                    tweeters={props.tweeters}
                    pickAnswer={pickAnswer}
                />
                <div className="twitter-btn">
                    {userAnswer
                        ? <button onClick={() => checkAnswer(userAnswer, props.correctAnswer)}>Check Answer</button>
                        : <button onClick={() => fetchTwitter()}>Next Tweet</button>
                    }
                </div>
                <p>Current Score: {score}</p>
                <p>High Score: {props.highScore}</p>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        ...state,
        tweet: state.tweet,
        tweeters: state.tweeters,
        correctAnswer: state.answer.screen_name,
        highScore: state.highScore,
        username: state.username
    }
}

export default connect(
    mapStateToProps,
    { getTwitter, postScore, setNewHighScore }
)(Game);