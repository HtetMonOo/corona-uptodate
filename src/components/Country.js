import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { makeStyles, withStyles } from '@material-ui/core/styles';

const CssTextField = withStyles( (theme) => ({

    root: {
      fontWeight: theme.typography.fontWeightBold, 
      border: '1px solid rgba(191, 191, 191, 0.15)',
      borderRadius: 4,
      backgroundColor: '#fcfcfb',
      '& .MuiInput-underline:after': {
        borderBottomColor: 'transparent',
      },
      '& .MuiOutlinedInput-root': {
        '& fieldset': {
          borderColor: 'transparent',
        },
        '&:hover fieldset': {
          borderColor: 'transparent',
        },
        '&.Mui-focused fieldset': {
          borderColor: 'transparent',
        },
      },
    },
  }))(TextField);

const useStyles = makeStyles({
  option: {
    fontSize: 15,
    '& > span': {
      marginRight: 10,
      fontSize: 18,
    },
  }, 
  center: {
      marginRight: 'auto',
      marginLeft: 'auto',
  }
});

const Country = ({country, selectCountry, countries}) => {
  const classes = useStyles();
  const [ value, setValue ] = useState(country);

  return (
    <Autocomplete
      style={{ width: 300 }}
      options={countries}
      value = { value }
      onChange = { (event, newValue) => {
          setValue(newValue);
          selectCountry(newValue);
      }}
      className= { classes.center }
      classes={{
        option: classes.option,
      }}
      autoHighlight
      getOptionLabel={(option) => option}
      renderOption={(option) => (
        <React.Fragment>
          {option}
        </React.Fragment>
      )}
      renderInput={(params) => (
        <CssTextField
        {...params}
        size="medium"
        variant="outlined"
        inputProps={{
          ...params.inputProps,
          autoComplete: 'new-password',
        }}
      />
      )}
    />
  );
}

export default Country;

