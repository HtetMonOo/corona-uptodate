import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 170,
  },
}));


const Duration = ({duration, selectDuration }) => {
  const classes = useStyles();
  const [ value, setValue] = useState(duration);
 console.log(value);
  return (
    <div>
      <FormControl variant="outlined" size="small">
        <Select
         className={classes.formControl}
          value={value}
          onChange={(event, newValue) => {
              setValue(newValue.props.value);
            selectDuration(newValue.props.value);}}
          style={{background: '#fcfcfb'}}
          >
          <MenuItem value={"week"}>During one week</MenuItem>
          <MenuItem value={"month"}>During one month</MenuItem>
          <MenuItem value={"year"}>During one year</MenuItem>
        </Select>
      </FormControl>
     
    </div>
  );
}

export default Duration;
