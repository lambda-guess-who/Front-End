import React from 'react';

const Tweet = props => {
    
    return (
        <div className="tweet-container">
            {props.noImage
                ? null
                :
                <div className="tweetheader">
                    <img id = 'tweetPic' src={props.userObject.profile_image_url_https} alt="" />
                    <div className="nameHandle">
                        <h6>{props.userObject.name}</h6>
                        <p>{`@${props.userObject.screen_name}`}</p>
                    </div>
                </div> 
                
            }
            <div className="tweet">
                {props.tweet}
            </div>
            <div className="tweet-date">
                <p>04:29 AM - Jan 04, 2019</p>
            </div>
            <div className="tweet-stats">
                <p><i className="far fa-comment" alt="twitter comment icon"></i>7.1k</p>
                <p><i className="fas fa-retweet" alt="twitter retweet icon"></i>14.3k</p>
                <p><i className="far fa-heart" alt="twitter like icon"></i>24.5k</p>
            </div>
        </div>
    )
}

export default Tweet;