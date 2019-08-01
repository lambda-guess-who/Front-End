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
                <img id='highScoreStar' src='https://www.searchpng.com/wp-content/uploads/2019/04/Star-PNG-715x715.png' alt="" />
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