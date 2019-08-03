import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import {
    getTwitter,
    getScore,
    postScore,
    // setNewHighScore
} from '../../actions';
import { parseToken } from '../../../src/actions/parseToken';

import './Game.scss';
import Tweet from './Tweet/Tweet.js';
import Tweeters from './Tweeters/Tweeters.js'
import TryAgain from './TryAgain';

const Game = props => { 

    const [score, setScore] = useState(0);
    const [highScore, setHighScore] = useState(0);
    const [userAnswer, setUserAnswer] = useState('');
    const [canAnswer, setCanAnswer] = useState(true);
    const [isTrue, setIsTrue] = useState(false);
    const [userId, setUserId] = useState(parseToken(localStorage.getItem("token")).user.id);

    const fetchTwitter = () => {
        props.getTwitter();
        setCanAnswer(true);
        setIsTrue(false);
    }
    
    // console.log(parseToken(localStorage.getItem("token")))
    // let userID = parseToken(localStorage.getItem("token")).user.id
    // console.log("userID", userID);
    
    useEffect(() => {
        fetchTwitter();
        // props.getScore(userID);
        console.log("userId: ", userId);
        props.getScore(userId)
        // setUserId(parseToken(localStorage.getItem("token")).user.id);
        // console.log("userId in UE:", userId);
        // setHighScore(props.getScore(parseToken(localStorage.getItem("token")).user.id))
        // console.log("HS after in UE: ", highScore);
        // console.log("props.userId in useEffect: ", props.userId);
        // props.getUser(props.userId);
    // }, [highScore])
    }, [])


    const pickAnswer = tweeter => {
        setUserAnswer(tweeter.handle)
    }
    // const changeScore = score =>{
    //     props.postScore(userID, score)
    // }

    const checkAnswer = async (uAnswer, cAnswer) => {
    // const checkAnswer = (uAnswer, cAnswer) => {
        if(canAnswer) {   
        if(uAnswer === cAnswer) {
            setScore(score + 1);
            setIsTrue(true);
        } else {
            localStorage.setItem("prevTweet", JSON.stringify(props.tweet))       
            localStorage.setItem("prevUserObj", JSON.stringify(props.correctUserObject))       
            // if(score > props.highScore) {
            if(score > highScore) {
                // await props.setNewHighScore(score)
                // props.setNewHighScore(score)
                // changeScore(score)
                setHighScore(score)
                props.postScore(userId, highScore)
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
                    {/* <p id='highScore'>High Score: {props.highScore}</p> */}
                    <p id='highScore'>High Score: {highScore}</p>
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
        // highScore: state.highScore,
        // username: state.username,
        // userId: state.userId
    }
}

export default connect(
    mapStateToProps,
    { getTwitter,
        postScore,
        // setNewHighScore,
        getScore
    }
)(Game);