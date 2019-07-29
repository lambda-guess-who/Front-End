import React from 'react';

const Tweet = () => {
    return (
        <div className="tweet-container">
            <div className="tweet">
                This is where the tweet goes. Users will see a Tweet inside of this container,
                they will choose from the people below who they think wrote the Tweet.
            </div>
            <div className="tweet-date">
                <p>04:29 AM - Jan 04, 2019</p>
            </div>
            <div className="tweet-stats">
                <p>7.1k</p>
                <p>14.3k</p>
                <p>24.5k</p>
            </div>
        </div>
    )
}

export default Tweet;