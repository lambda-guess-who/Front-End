import React from 'react';
import { Link } from 'react-router-dom';

function Header (){
    return(
        <div className='header'>
            <Link to="/dashboard">
                <img src='https://i.imgur.com/liO8kXc.png' alt =''/>
            </Link>
            <h1>Profile</h1>
        </div>
    )
}

export default Header;