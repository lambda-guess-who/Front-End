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
            <Footer highScore={props.highScore} />
        </div>
    )
};

const mapStateToProps = state => {
    return {
        ...state,
        username: state.username,
        welcomeMesage: state.welcome,
        highScore: state.highScore
    }
}

export default connect(
    mapStateToProps,
    {}
)(Dashboard);