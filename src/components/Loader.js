import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles((theme) => ({
    colorPrimary: {
      color: 'gray',
    }
  }));
function Loader() {
    const classes = useStyles();
    return (
        <div className="Loader">
            <CircularProgress color="primary" className={classes.colorPrimary}/>
        </div>
    )
}

export default Loader;
