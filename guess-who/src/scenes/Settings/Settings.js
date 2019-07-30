import React from 'react';
import { connect } from 'react-redux';

import "../../index.scss";
import "./settings.scss";
import { Icon } from '@material-ui/core';
import SettingsSwitches from "./SettingsSwitches";


const Settings = props => {
    
   const logout = () => {
       localStorage.removeItem("token")
       props.history.push("/")
   } 

    return (
        <div className="settings-container">
            <h1>Settings</h1>
            <SettingsSwitches />
            <div className="buttons">
                <Icon>attach_file</Icon> User Agreement 
            </div>
            <div className="buttons">
                <Icon></Icon>Contact Us
            </div>
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

