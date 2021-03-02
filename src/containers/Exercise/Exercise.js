import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

function Exercise() {
    const classes = useStyle();
    return (
        <div className={classes.exercise}>

        </div>
    );
}

const useStyle = makeStyles((theme) => ({

}));

export default Exercise;