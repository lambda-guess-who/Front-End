import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import { getTwitter, postScore, setNewHighScore, getUser } from '../../actions';

import './Game.css';
import Tweet from './Tweet/Tweet.js';
import Tweeters from './Tweeters/Tweeters.js'

const Game = props => { 

    const [score, setScore] = useState(0);
    const [userAnswer, setUserAnswer] = useState('');
    const [canAnswer, setCanAnswer] = useState(true);
    let isTrue = false;

    const fetchTwitter = () => {
        props.getTwitter();
    }
    useEffect(() => {
        fetchTwitter();
        console.log("props.userId in useEffect: ", props.userId);
        props.getUser(props.userId);
    }, [])

    const checkAnswer = (uAnswer, cAnswer) => {
        if(canAnswer) {   
        if(uAnswer === cAnswer) {
            setScore(score + 1);
            console.log("isTrue B: ", isTrue);
            isTrue = true;
            console.log("isTrue A", isTrue);
        } else {
            localStorage.setItem("prevTweet", JSON.stringify(props.tweet))       
            localStorage.setItem("prevUserObj", JSON.stringify(props.correctUserObject))       
            if(score > props.highScore) {
                props.setNewHighScore(score)
                props.postScore(props.userId, props.highScore)
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

    const pickAnswer = () => {

    }

    return (
        <div className="wrapper">
            <div className="game-container">
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
                />
                <div className="twitter-btn">
                    <button onClick={() => checkAnswer()}>Check answer</button>
                </div>
                <p>{score}</p>
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
    { getTwitter, postScore, setNewHighScore, getUser }
)(Game);