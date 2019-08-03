import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
// import { getUser } from '../../actions';

import "../../index.scss";
import "./settings.scss";
import { Icon } from '@material-ui/core';
import SettingsSwitches from "./SettingsSwitches";
import './Twitter_Social_Icon_Square_Color.png';


const Settings = props => {   

    return (
        <div className="settings-container">
            <div className='settingsHeader'>
                <Link to="/dashboard">
                    <img src='https://i.imgur.com/liO8kXc.png' alt =''/>
                </Link>
                <h1>Settings</h1>  
            </div>
            <div className='soundButtons'>
                <SettingsSwitches />  
            </div>
            <div className='settingsButtons'>
                <button className="buttons">
                    <Icon>attach_file</Icon> User Agreement
                </button>
                <button className="buttons">
                    <img style={{width: '20px', height: '20px'}} src="https://iconsplace.com/wp-content/uploads/_icons/ffffff/256/png/twitter-icon-18-256.png" alt=""/> Contact Us
                </button>  
            </div>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        ...state,
        userId: state.userId
    }
}

export default connect(
    mapStateToProps,
    // { getUser }
    {}
)(Settings);

