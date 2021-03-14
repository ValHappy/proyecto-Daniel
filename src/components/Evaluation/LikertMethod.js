import React from 'react';
import { FormControlLabel, makeStyles, Radio, RadioGroup } from '@material-ui/core';
import colors from '../../styles/colors';

function Likert() {
    const classes = useStyle();

    return (
        <div className={classes.likert}>
            <p className={classes.question}> Lorem ipsum dolor sit amet consectetur</p>

            <RadioGroup className={classes.container} row aria-label="position" name="position" defaultValue="top">

                <FormControlLabel
                    value="1"
                    control={<Radio className={classes.radio} color="primary" />}
                    label="1"
                    labelPlacement="bottom"
                />
                <FormControlLabel
                    value="2"
                    control={<Radio className={classes.radio} color="primary" />}
                    label="2"
                    labelPlacement="bottom"
                />
                <FormControlLabel
                    value="3"
                    control={<Radio className={classes.radio} color="primary" />}
                    label="3"
                    labelPlacement="bottom"
                />
                <FormControlLabel
                    value="4"
                    control={<Radio className={classes.radio} color="primary" />}
                    label="4"
                    labelPlacement="bottom"
                />
                <FormControlLabel
                    value="5"
                    control={<Radio className={classes.radio} color="primary" />}
                    label="5"
                    labelPlacement="bottom"
                />
            </RadioGroup>
        </div>
    );
}

const useStyle = makeStyles((theme) => ({
    likert: {
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
    radio: {
        color: colors.blue,
    },
}));

export default Likert;