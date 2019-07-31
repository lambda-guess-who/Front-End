import React from 'react';
// import { Component } from 'react';
// import axios from 'axios';

import './styles.scss';


const Body = props => {

    return (
        <div className='body'>
            <img src='https://i.imgur.com/AWjw3jH.png' alt='' />
            <h2>{props.username}</h2>
            <p>@userTwitterHandle</p>
            <h3>High Score: {props.highScore}</h3>
            <button>
            <img src='https://i.imgur.com/KDnz4zT.png' alt='' />
            Invite Friends
            </button>
            <p>Instantly unlock 10 new levels when you invite a friend</p>
        </div>
    )
    
};

export default Body;