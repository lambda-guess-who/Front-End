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
            <button style ={{border: '2px solid white'}} class='purpleButton'>
            <img src='https://png.pngtree.com/svg/20160823/f5a18f969c.png' alt='' />
            Invite Friends
            </button>
            <p>Instanstly unlock 10 new levels when you invite a friend</p>
        </div>
    )
};

export default Body;