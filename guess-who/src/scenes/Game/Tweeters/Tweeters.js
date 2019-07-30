import React from 'react';

const Tweeters = () => {
    return (
        <div className="tweeters-container">
            <p>Who Tweeted It?!</p>
            <div className="tweeters">
                <div className="tweeter">
                    <p className="tweet-name">Elizabeth Warren</p>
                    <p className="tweet-handle">@ewarren</p>
                </div>
                <div className="tweeter">
                    <p className="tweet-name">Pete Buttigieg</p>
                    <p className="tweet-handle">@PeteButtigieg</p>
                </div>
            </div>
        </div>
    )
}

export default Tweeters;