import React from 'react';
import Header from './Header';
import Body from './Body';


import './styles.scss';


function Dashboard(){
    return (
        <div className='dashboard'>
            <Header />
            <Body /> 
            {/* <Footer /> */}
        </div>
    )
};

export default Dashboard;