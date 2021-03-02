import React from 'react';
import { Divider, makeStyles } from '@material-ui/core';
import colors from '../../styles/colors';

function Music() {
    const classes = useStyle();

    return (
        <div className={classes.music}>
            <div className={classes.info}>
                <h3 className={classes.title}>Lorem ipsum dolor</h3>
                <p className={classes.text}>Lorem ipsum dolor sit amet consectetur</p>

            </div>

            <Divider className={classes.divider} light orientation='horizontal' variant='middle' />

            <div className={classes.player}>
                <h3 className={classes.title}>Player</h3>
            </div>

        </div>
    );
}

const useStyle = makeStyles((theme) => ({
    music: {
        width: '100%',
        height: '100%',
        margin: '1em',
        padding: '0.5em',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    info: {
        width: '100%',
        height: '100%',
        margin: '0.5em',
        padding: '1em',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-end',
    },
    title: {
        margin: 0,
        textAlign: 'right',
        color: colors.text,
    },
    text: {
        margin: 0,
        textAlign: 'right',
        color: colors.text,
    },
    divider: {
        width: 40,
        height: 2,
        background: colors.blue,
    },
    player: {
        width: '100%',
        height: '50%',
        margin: '0.5em',
        padding: '1em',
        borderRadius: '0.5em',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        background: colors.background,
    }

}));

export default Music;