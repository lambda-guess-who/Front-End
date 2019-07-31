import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Tweet from './Tweet/Tweet';

const TryAgain = props => {
    return (
        <div>
            <h1>Darn!</h1>
            <Link to="/game">Play Again</Link>
            <Link to="/dashboard">Back to Dashboard</Link>
            <Tweet userObject={props.userObject} tweet={props.tweet} />
        </div>
    );
};

export default TryAgain;