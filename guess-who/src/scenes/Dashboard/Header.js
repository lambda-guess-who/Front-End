import React from 'react';
import { Link } from 'react-router-dom';


function Header(){
    return (
        <div className='header'>
            <Link to="/profile">
                <img id='profilePicture' src='http://genfkd.wpengine.netdna-cdn.com/wp-content/uploads/2018/05/shutterstock_793117360-503x518.jpg' alt="" />
            </Link>
            <h1>Guess Who</h1>
            <Link to="/settings">
                <img src='https://i.imgur.com/nJdigNy.png' alt="" />
            </Link>
        </div>
    )
};

export default Header;