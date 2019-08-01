import React from 'react';
import { Link } from 'react-router-dom';


function Body(){
    return (
        <div className='body'>
            <div className='title'>Pick a category!</div>
            <Link to="/game" style={{textDecoration: 'none'}}>
                <button className='blueButton'>Presidential Candidates</button>
            </Link>
            <button className='greenButton'>
                Tech CEOs
                <img src='http://freepngdownload.com/image/thumb/pad-lock-png-free-download-28.png' alt=''/>
            </button>
            <button className='yellowButton'>
                NBA Players
                <img src='http://freepngdownload.com/image/thumb/pad-lock-png-free-download-28.png' alt=''/>
            </button>
            <button className='redButton'>
                Musicians
                <img src='http://freepngdownload.com/image/thumb/pad-lock-png-free-download-28.png' alt=''/>
            </button>
            <button className='orangeButton'>
                Comedians
                <img src='http://freepngdownload.com/image/thumb/pad-lock-png-free-download-28.png' alt=''/>
            </button>
            <button className='littleRedButton'>
                More Categories
                <img src='https://i.imgur.com/rYqVMNT.png' alt=''/>
            </button>
            <button className='purpleButton'>
                <img src='https://i.imgur.com/mFkRpB8.png' alt=''/>
                Invite Friends
            </button>
            <p>Instantly unlock 5 new levels when you invite a friend</p>
        </div>
    )
};

export default Body;