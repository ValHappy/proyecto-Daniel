import React from 'react';
import { makeStyles, Slider } from '@material-ui/core';
import colors from '../../styles/colors';

function SliderMethod() {
    const classes = useStyle();

    return (
        <div className={classes.slider}>
            <p className={classes.question}> Lorem ipsum dolor sit amet consectetur</p>
            <Slider
                className={classes.container}
                defaultValue={30}
                aria-labelledby="discrete-slider"
                valueLabelDisplay="auto"
                step={10}
                marks
                min={0}
                max={50}
            />
        </div>
    );
}

const useStyle = makeStyles(() => ({
    slider: {
        width: '25%',
        margin: '1em',
        padding: '1em',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    question: {
        color: colors.colortext,
    },
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
}));

export default SliderMethod;