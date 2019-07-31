import React from 'react';

import './styles.scss';


function Body(){
    return (
        <div className='body'>
            <img src='https://i.imgur.com/AWjw3jH.png' alt='' />
            <h2>userName</h2>
            <p>@userTwitterHandle</p>
            <h3>0</h3>
            <h4>HighScore</h4>
            <button>
            <img src='https://i.imgur.com/KDnz4zT.png' alt='' />
            Invite Friends
            </button>
            <p>Instantly unlock 10 new levels when you invite a friend</p>
        </div>
    )
};

export default Body;