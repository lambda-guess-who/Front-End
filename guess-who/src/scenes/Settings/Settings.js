import React from 'react';
import { connect } from 'react-redux';

import "../../index.scss";
import "./settings.scss";
import { Icon } from '@material-ui/core';
import SettingsSwitches from "./SettingsSwitches";


const Settings = props => {
    
   const logout = () => {
       localStorage.removeItem("token")
       localStorage.removeItem("username")
       props.history.push("/")
   } 

    return (
        <div className="settings-container">
            <h1>Settings</h1>
            <SettingsSwitches />
            <button className="buttons">
                <Icon>attach_file</Icon> User Agreement
            </button>
            <button className="buttons">
                <img src="Twitter_Social_Icon_Square_Color.png" alt=""/> Contact Us
                </button>
            <button onClick={logout}>logout</button>
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

