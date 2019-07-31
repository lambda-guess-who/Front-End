import React from 'react';

import './styles.scss';


const Body = props => {
    return (
        <div className='body'>
            <a><img src='https://i.imgur.com/AWjw3jH.png' alt='' /></a>
            <h2>{props.username}</h2>
            <p>@userTwitterHandle</p>
            <h3>High Score: {props.highScore}</h3>
            <button>
            <img src='https://i.imgur.com/KDnz4zT.png' alt='' />
            Invite Friends
            </button>
            <p>Instanstly unlock 10 new levels when you invite a friend</p>
        </div>
    )
};

export default Body;