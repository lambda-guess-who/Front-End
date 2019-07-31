import React from 'react';

const Tweeters = props => {
    return (
        <div className="tweeters-container">
            <p className="tweeter-title">
                <i className="fab fa-twitter" alt="twitter icon"></i>
                Who Tweeted It?!
            </p>
            <div className="tweeters">
                {props.tweeters.map(eachTweeter => {
                    return (
                        <div className="tweeter" onClick={() => props.pickAnswer(eachTweeter)}>
                            <img src={eachTweeter.picture} className="profile-photo" alt={eachTweeter.name} />
                            <div className="tweeter-info">
                                <p className="tweet-name">{eachTweeter.name}</p>
                                <p className="tweet-handle">{eachTweeter.handle}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Tweeters;