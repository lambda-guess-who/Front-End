import React from 'react';
// import { Component } from 'react';
// import axios from 'axios';

import './styles.scss';


const Body = props => {

    return (
        <div className='body'>
            <img className='profilePicture' src='http://genfkd.wpengine.netdna-cdn.com/wp-content/uploads/2018/05/shutterstock_793117360-503x518.jpg' alt='' />
            <h2>{props.username}</h2>
            <p>@userTwitterHandle</p>
            <div className='highScore'>
                <img id='highScoreStar' src='https://icon2.kisspng.com/20180130/zce/kisspng-trophy-scalable-vector-graphics-clip-art-vector-trophy-5a7085cf9f0e95.4147559515173237276515.jpg' alt="" />
                <h3>High Score: {props.highScore}</h3>
            </div>
            <button>
            <img id ='inviteFriendsPic' src='https://i.imgur.com/KDnz4zT.png' alt='' />
            Invite Friends
            </button>
            <p>Instantly unlock 10 new levels when you invite a friend</p>
        </div>
    )
    
};

export default Body;