import React from 'react';

import './styles.scss';


function Body(){
    return (
        <div className='body'>
            <a><img src='https://i.imgur.com/AWjw3jH.png' alt='' /></a>
            <h2>userName</h2>
            <p>@userTwitterHandle</p>
            <h3>0</h3>
            <h4>HighScore</h4>
            <button>
            <img src='https://i.imgur.com/KDnz4zT.png' alt='' />
            Invite Friends
            </button>
            <p>Instanstly unlock 10 new levels when you invite a friend</p>
        </div>
    )
};

export default Body;