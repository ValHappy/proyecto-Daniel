import React from 'react';
import { IconButton, makeStyles } from '@material-ui/core';
import Timeline from '../General/Timeline';
import { PlayCircleFilledRounded } from '@material-ui/icons';
import colors from '../../styles/colors';

const playerWidth = 350;
const playerHeight = 45;

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
        width: playerWidth,
        height: playerHeight,
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