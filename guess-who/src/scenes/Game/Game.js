import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { getTwitter, postScore, setNewHighScore, getUser } from '../../actions';

import './Game.scss';
import Tweet from './Tweet/Tweet.js';
import Tweeters from './Tweeters/Tweeters.js'
import TryAgain from './TryAgain';

const Game = props => { 

    const [score, setScore] = useState(0);
    const [userAnswer, setUserAnswer] = useState('');
    const [canAnswer, setCanAnswer] = useState(true);
    const [isTrue, setIsTrue] = useState(false);

    const fetchTwitter = () => {
        props.getTwitter();
        setCanAnswer(true);
        setIsTrue(false);
    }
    useEffect(() => {
        fetchTwitter();
        console.log("props.userId in useEffect: ", props.userId);
        props.getUser(props.userId);
    }, [])

    const changeScore = () =>{
        props.postScore(props.userId, score)
    }

    const checkAnswer = async (uAnswer, cAnswer) => {
        if(canAnswer) {   
        if(uAnswer === cAnswer) {
            setScore(score + 1);
            setIsTrue(true);
        } else {
            localStorage.setItem("prevTweet", JSON.stringify(props.tweet))       
            localStorage.setItem("prevUserObj", JSON.stringify(props.correctUserObject))       
            if(score > props.highScore) {
                await props.setNewHighScore(score)
                changeScore(score)
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
                    <img style={{width: '40px', height: '40px'}} src='https://i.imgur.com/liO8kXc.png' className="dashboard-icon" alt =''/>
                </Link>
                <div className="category-title">
                    <h1>Category</h1>
                    <p className="category">Presidential Candidates</p>
                </div>
                <Tweet tweet={props.tweet} userObject={props.correctUserObject} noImage={true} />
                <Tweeters
                    tweeters={props.tweeters}
                    pickAnswer={pickAnswer}
                    userAnswer={userAnswer}
                    isTrue={isTrue}
                    correctAnswer={props.correctAnswer}
                />
                <div className="twitter-btn">
                    {canAnswer
                        ? <button onClick={() => checkAnswer(userAnswer, props.correctAnswer)}>Check Answer</button>
                        : <button onClick={() => fetchTwitter()}>Next Tweet</button>
                    }
                </div>
                <div className='gameScores'>
                    <p id='currentScore'>Current Score: {score}</p>
                    <img id='highScoreStar' src='https://www.searchpng.com/wp-content/uploads/2019/04/Star-PNG-715x715.png' alt="" />
                    <p id='highScore'>High Score: {props.highScore}</p>  
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
        correctAnswer: state.answer.screen_name,
        correctUserObject: state.answer,
        highScore: state.highScore,
        username: state.username,
        userId: state.userId
    }
}

export default connect(
    mapStateToProps,
    { getTwitter, postScore, setNewHighScore, getUser }
)(Game);