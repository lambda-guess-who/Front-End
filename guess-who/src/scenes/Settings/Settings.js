import React from 'react';
import "../../index.scss";
import "./settings.scss";
import { Icon } from '@material-ui/core';
import SettingsSwitches from "./SettingsSwitches";


function Settings() {
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
        </div>
    );
}

export default Settings

