import React from 'react';
import { Link } from 'react-router-dom';


function Body(){
    return (
        <div className='body'>
            <h3>Pick a category!</h3>
            <Link to="/game">
                <button className='blueButton'>Presidential Candidates</button>
            </Link>
            <button className='greenButton'>Venture Capitalists
            <img src='http://freepngdownload.com/image/thumb/pad-lock-png-free-download-28.png' alt="" />
            </button>
            <button className='yellowButton'>Basketball Players
            <img src='http://freepngdownload.com/image/thumb/pad-lock-png-free-download-28.png' alt="" />
            </button>
            <button className='redButton'>Youtubers
            <img src='http://freepngdownload.com/image/thumb/pad-lock-png-free-download-28.png' alt="" />
            </button>
            <button className='littleRedButton'>More Categories
            <img src='https://i.imgur.com/rYqVMNT.png' alt="" />
            </button>
            <button className='purpleButton'>
            <img src='https://png.pngtree.com/svg/20160823/f5a18f969c.png' alt="" />
            Invite Friends
            </button>
            <p>Instantly unlock 5 new levels when you invite a friend</p>
        </div>
    )
};

export default Body;