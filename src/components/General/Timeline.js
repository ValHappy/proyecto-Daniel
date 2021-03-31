import { makeStyles, Slider } from '@material-ui/core';
import React from 'react';

function Timeline({audioDuration = "0:00", timeCurrent = "0:00", progress = 0}) {
    const classes = useStyle();
    const duration = ()=>{
        let minutes = 0;
        if (audioDuration >= 60) {
            minutes = audioDuration/60;
        }
        
            
        
        const seconds = audioDuration%60;
        
        const timeDuration = minutes + ":" + (seconds <10 ? "0"+seconds : seconds);
        return timeDuration;
    }

    const currentTime = ()=>{
        let minutes = 0;
        if (timeCurrent >= 60) {
            minutes = timeCurrent/60;
        }
        
            
        
        const seconds = timeCurrent%60;
        
        const current = minutes + ":" + (seconds <10 ? "0"+seconds : seconds);
        return current;
    }
    return (
        <div className={classes.timeline}>
            <p className={classes.timeText}>{currentTime()}</p>
            <Slider value={progress} aria-labelledby="disabled-slider" />
            <p className={classes.timeText}>{duration()}</p>
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