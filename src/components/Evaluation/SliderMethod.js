import React from 'react';
import { makeStyles, Slider } from '@material-ui/core';

function SliderMethod() {
    const classes = useStyle();

    return (
        <div className={classes.slider}>
            <p className={classes.question}> Lorem ipsum dolor sit amet consectetur</p>
            <div className={classes.container}>
                <Slider
                    defaultValue={3}
                    aria-labelledby="discrete-slider"
                    valueLabelDisplay="auto"
                    step={1}
                    marks
                    min={1}
                    max={5}
                />
            </div>
        </div>
    );
}

const useStyle = makeStyles(() => ({
    slider: {
        width: '30%',
        margin: '1em',
        padding: '1em',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    question: {
        textAlign: 'center',
    },
    container: {
        width: '55%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
}));

export default SliderMethod;