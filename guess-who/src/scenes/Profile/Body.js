import React from 'react';
// import { Component } from 'react';
// import axios from 'axios';

import './styles.scss';


const Body = props => {

    // let [selectedFile, setSelectedFile] = useState(null)

    // let fileSelectedHandler = event => {
    //     selectedFile = event.target.files[0]
    //     console.log(selectedFile)
    //     setSelectedFile(selectedFile)
    // };

    // let fileUploadHandler = event => {
    //     const fd = new FormData();
    //     fd.append('image', selectedFile, selectedFile.name);
    //     axios.post('', fd)
    //     .then(res =>{
    //         // console.log(res)
    //     })
    //     .catch(res =>{
    //         console.log('didnt worked')
    //     })
    // };

    return (
        <div className='body'>
            <img src='https://i.imgur.com/AWjw3jH.png' alt='' />
            <h2>{props.username}</h2>
            <p>@userTwitterHandle</p>
            {/* <input type='file' onChange={fileSelectedHandler}/> */}
            <h3>{props.highScore}</h3>
            <button>
            <img src='https://i.imgur.com/KDnz4zT.png' alt='' />
            Invite Friends
            </button>
            <p>Instantly unlock 10 new levels when you invite a friend</p>
        </div>
    )
};

export default Body;