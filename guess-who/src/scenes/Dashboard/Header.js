import React from 'react';
import { Link } from 'react-router-dom';


function Header(){
    return (
        <div className='header'>
            <Link to="/profile">
                <img src='https://i.imgur.com/AWjw3jH.png' alt="" />
            </Link>
            <h1>Guess Who</h1>
            <Link to="/settings">
                <img src='https://i.imgur.com/nJdigNy.png' alt="" />
            </Link>
        </div>
    )
};

export default Header;