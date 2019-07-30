import React from 'react';
import { connect } from 'react-redux';

import Header from './Header';
import Body from './Body';
import Footer from './Footer';


import './styles.scss';


const Dashboard = props => {
    
    console.log("props: ", props);
    console.log("props.username: ", props.username);

    return (
        <div className='dashboard'>
            {props.username && <p>{props.username}</p>}
            <Header />
            <Body /> 
            <Footer />
        </div>
    )
};

const mapStateToProps = state => {
    return {
        ...state,
        username: state.username
    }
}

export default connect(
    mapStateToProps,
    {}
)(Dashboard);