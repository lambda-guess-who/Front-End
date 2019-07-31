import React from 'react';
import { connect } from 'react-redux';

import Header from './Header';
import Body from './Body';
import Footer from './Footer';


import './styles.scss';


const Dashboard = props => {

    return (
        <div className='dashboard'>
            <Header />
            <Body /> 
            <Footer highScore={props.highScore} />
        </div>
    )
};

const mapStateToProps = state => {
    return {
        ...state,
        welcomeMesage: state.welcome,
        highScore: state.highScore
    }
}

export default connect(
    mapStateToProps,
    {}
)(Dashboard);