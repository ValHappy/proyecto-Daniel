import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Player from '../../components/Player/Player';
import Logo from '../../components/General/Logo';
import colors from '../../styles/colors';
import Btn from '../../components/General/Btn';
import SliderMethod from '../../components/Evaluation/SliderMethod';
import LikertMethod from '../../components/Evaluation/LikertMethod';


function Exercise() {
    const classes = useStyle();

    return (
        <div className={classes.exercise}>
            <div className={classes.logo}>
                <Logo />
            </div>
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
            <div className={classes.btn}>
                <Btn btn={"Siguiente"} />
            </div>
        </div >
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
        margin: 0,
        padding: 0,
        width: '100%',
        height: '10%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-end',
    },
    info: {
        margin: 0,
        padding: 0,
        width: '50%',
        height: '35%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',

    },
    title: {
        textAlign: 'center',
        margin: 0,
        padding: '0.5em',
        color: colors.blue,
    },
    text: {
        textAlign: 'center',
        width: '80%',
        margin: 0,
        padding: '0.5em',
        color: colors.colortext,
    },
    container: {
        margin: 0,
        padding: 0,
        width: '100%',
        height: '30%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    content1: {
        margin: 0,
        padding: 0,
        width: '100%',
        height: '35%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-end',
    },
    content2: {
        margin: 0,
        padding: 0,
        width: '100%',
        height: '65%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    btn: {
        margin: 0,
        padding: 0,
        width: '100%',
        height: '10%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
}));

export default Exercise;