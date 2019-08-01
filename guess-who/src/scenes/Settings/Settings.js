import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

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
            <button className="buttons">
                <Icon>attach_file</Icon> User Agreement
            </button>
            <button className="buttons">
                <img src="./Twitter_Social_Icon_Square_Color.png" alt=""/> Contact Us
                </button>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        ...state,
    }
}

export default connect(
    mapStateToProps,
    {}
)(Settings);

