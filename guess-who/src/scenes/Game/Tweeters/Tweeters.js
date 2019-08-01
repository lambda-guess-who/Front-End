import React from 'react';

const Tweeters = props => {
    console.log("in Tweets ", props.isTrue);
    return (
        <div className="tweeters-container">
            <p className="tweeter-title">
                <i className="fab fa-twitter" alt="twitter icon"></i>
                Who Tweeted It?!
            </p>
            <div className="tweeters">
                {props.tweeters.map(eachTweeter => {
                    return (
                        <div key={i}
                            className={
                                props.userAnswer === eachTweeter.handle
                                ? "tweeter selected"
                                : props.isTrue
                                ? "tweeter correct-btn"
                                : "tweeter"
                            }
                            onClick={() => {
                                props.pickAnswer(eachTweeter)
                            }}>
                            <img src={eachTweeter.id.profile_image_url_https} className="profile-photo" alt={eachTweeter.id.name} />
                            <div className="tweeter-info">
                                <p className="tweet-name">{eachTweeter.id.name}</p>
                                <p className="tweet-handle">{`@${eachTweeter.handle}`}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Tweeters;