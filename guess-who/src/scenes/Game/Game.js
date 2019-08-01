import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { getTwitter, postScore, setNewHighScore } from '../../actions';

import './Game.scss';
import Tweet from './Tweet/Tweet.js';
import Tweeters from './Tweeters/Tweeters.js'
import TryAgain from './TryAgain';

const Game = props => { 

    const [score, setScore] = useState(0);
    const [userAnswer, setUserAnswer] = useState('');
    const [canAnswer, setCanAnswer] = useState(true);

    const fetchTwitter = () => {
        props.getTwitter();
        setCanAnswer(true);

    }
    useEffect(() => {
        fetchTwitter();
    }, [])

    const sendScore = (id, endScore) => {
        props.postScore( id, endScore);
    }
    const checkAnswer = (uAnswer, cAnswer) => {
        if(canAnswer) {   
        if(uAnswer === cAnswer) {
            setScore(score + 1);
        } else {
            localStorage.setItem("prevTweet", JSON.stringify(props.tweet))       
            localStorage.setItem("prevUserObj", JSON.stringify(props.correctUserObject))       
            if(score > props.highScore) {
                props.setNewHighScore(score)
                sendScore(props.id, props.highScore)
                setScore(0);
                props.history.push("/tryagain")
            } else {
                setScore(0);
                props.history.push("/tryagain")
            }
        }
        setCanAnswer(false)
        setUserAnswer('');
        }
    }

    const pickAnswer = tweeter => {
        setUserAnswer(tweeter.handle)
    }


    if(props.location.pathname === "/tryagain") {
        return <TryAgain 
            tweet={props.tweet}
            userObject={props.correctUserObject}
        /> 
    }

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
                <Tweet tweet={props.tweet} userObject={props.correctUserObject} noImage={true} />
                <Tweeters
                    tweeters={props.tweeters}
                    pickAnswer={pickAnswer}
                />
                <div className="twitter-btn">
                    {canAnswer
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
        correctUserObject: state.answer,
        highScore: state.highScore,
        username: state.username,
        userId: state.userId
    }
}

export default connect(
    mapStateToProps,
    { getTwitter, postScore, setNewHighScore }
)(Game);