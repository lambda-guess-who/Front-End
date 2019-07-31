import React from 'react';
import { connect } from 'react-redux';

import Header from './Header';
import Body from './Body';
import Footer from './Footer';


import './styles.scss';


const Dashboard = props => {

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
        username: state.username,
        welcomeMesage: state.welcome
    }
}

export default connect(
    mapStateToProps,
    {}
)(Dashboard);