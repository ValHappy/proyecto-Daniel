import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Player from '../../components/Player/Player';
import Logo from '../../components/General/Logo';
import colors from '../../styles/colors';
import Btn from '../../components/General/Btn';
import SliderMethod from '../../components/Evaluation/SliderMethod';

function Exercise() {
    const classes = useStyle();

    return (
        <div className={classes.exercise}>
            <Logo className={classes.logo} />
            <div className={classes.info}>
                <h2 className={classes.title}>Lorem ipsum dolor sit amet consectetur</h2>
                <p className={classes.text}>Lorem ipsum dolor sit amet consectetur adipiscing elit lectus sapien, cubilia mattis bibendum suscipit euismod metus proin convallis phasellus nisi, class fermentum id magnis accumsan vitae netus ad. Hendrerit fusce vestibulum placerat per primis mattis hac nostra maecenas aptent lacus mus venenatis.</p>
            </div>

            <div className={classes.container}>
                <div className={classes.content1}>
                    <Player />
                </div>
                <div className={classes.content2}>
                    <Player />
                    <SliderMethod />
                    <Player />
                </div>
            </div>

            <Btn btn={"Siguiente"} />
        </div>
    );
}

const useStyle = makeStyles((theme) => ({
    exercise: {
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {

    },
    info: {
        width: '50%',
        margin: '1em',
        padding: '0.5em',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        textAlign: 'center',
        margin: 0,
        padding: '0.5em',
        color: colors.violet,
    },
    text: {
        textAlign: 'center',
        width: '80%',
        margin: 0,
        padding: '0.5em',
        color: colors.colortext,
    },
    container: {
        width: '90%',
        margin: '1em',
        padding: '1em',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    content1: {
        padding: '1em',
    },
    content2: {
        width: '100%',
        padding: '1em',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
}));

export default Exercise;