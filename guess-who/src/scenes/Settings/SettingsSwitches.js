
import React from 'react';
import { Icon, Typography, Grid, Switch, FormGroup, withStyles } from '@material-ui/core';
import "./settings.scss";


const IOSSwitch = withStyles(theme => ({
  root: {
    width: 42,
    height: 26,
    padding: 0,
    margin: theme.spacing(1),
  },
  switchBase: {
    padding: 1,
    '&$checked': {
      color: theme.palette.common.white,
      '& + $track': {
        backgroundColor: '#52d869',
        opacity: 1,
        border: 'none',
      },
    },
    '&$focusVisible $thumb': {
      color: '#52d869',
      border: '6px solid #fff',
    },
  },
  thumb: {
    width: 24,
    height: 24,
  },
  track: {
    borderRadius: 26 / 2,
    border: `1px solid ${theme.palette.grey[400]}`,
    backgroundColor: theme.palette.grey[50],
    opacity: 1,
    transition: theme.transitions.create(['background-color', 'border']),
  },
  checked: {},
  focusVisible: {},
}))(({ classes, ...props }) => {
  return (
    <Switch
      focusVisibleClassName={classes.focusVisible}
      disableRipple
      classes={{
        root: classes.root,
        switchBase: classes.switchBase,
        thumb: classes.thumb,
        track: classes.track,
        checked: classes.checked,
      }}
      {...props}
    />
  );
});


function SettingsSwitches() {
  const [state, setState] = React.useState({
    checkedMusic: true,
    checkedSFX: true,
  });

  const handleChange = name => event => {
    setState({ ...state, [name]: event.target.checked });
  };

  const formStyle = {
    width: `100%`,
    
  };

  return (
    <FormGroup style={formStyle}>
      <div className="switch-container">
        <Grid component="label" container alignItems="center" spacing={1}>
          <Grid item><Icon>music_note</Icon></Grid>
          <Grid item><h2>Music</h2></Grid>
          <Grid item>
            <IOSSwitch
              checked={state.checkedMusic}
              onChange={handleChange('checkedMusic')}
              value="checkedMusic"
            />
          </Grid>
        </Grid>
      </div>
      <div className="switch-container">
        <Grid component="label" container alignItems="center" spacing={1}>
          <Grid item><Icon>volume_up</Icon></Grid>
          <Grid item><h2>SFX</h2></Grid>
          <Grid item>
            <IOSSwitch
              checked={state.checkedSFX}
              onChange={handleChange('checkedSFX')}
              value="checkedSFX"
            />
          </Grid>
        </Grid>
      </div>
    </FormGroup>
  );
}

export default SettingsSwitches