import React from 'react';

import './styles.scss';


const Footer = props => {
   
    return (
        <div className='footer'>
          <button onClick={() => props.logout()}>
            <img src='https://i.imgur.com/n5Wcr24.png' alt='' />
            <h2>Log Out</h2>    
        </button>  
        </div>
    )
};

export default Footer;





