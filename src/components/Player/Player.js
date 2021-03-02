import React from 'react';
import { IconButton, makeStyles } from '@material-ui/core';
import Timeline from '../General/Timeline';
import { PlayCircleFilledRounded } from '@material-ui/icons';
import colors from '../../styles/colors';

function Player() {
    const classes = useStyle();

    return (
        <div className={classes.player}>
            <IconButton>
                <PlayCircleFilledRounded />
            </IconButton>
            <Timeline />
        </div>
    );
}

const useStyle = makeStyles((theme) => ({
    player: {
        width: '100%',
        height: '40%',
        margin: '0.5em',
        padding: '1em',
        borderRadius: '0.5em',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: colors.background,
    }

}));
export default Player;