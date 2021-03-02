import { makeStyles, Slider } from '@material-ui/core';
import React from 'react';

function Timeline() {
    const classes = useStyle();
    return (
        <div className={classes.timeline}>
            <p className={classes.timeText}>0:00</p>
            <Slider defaultValue={30} aria-labelledby="disabled-slider" />
            <p className={classes.timeText}>2:50</p>
        </div>
    );
}

const useStyle = makeStyles((theme) => ({
timeline: {
    width: '100%',
    height: '100%',
    margin: '0.5em',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
},
timeText:{
    margin: '1em',
    
},

}));

export default Timeline;