import React from 'react';
import { Link } from 'react-router-dom';

const TryAgain = props => {
    return (
        <div>
            <h1>Darn!</h1>
            <Link to="/game">Play Again</Link>
            <Link to="/dashboard">Back to Dashboard</Link>
        </div>
    );
};

export default TryAgain;