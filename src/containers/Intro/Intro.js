import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import colors from '../../styles/colors';
import Logo from '../../components/General/Logo';
import Music from '../../components/Music/Music';

function Intro() {
    const classes = useStyle();
    return (
        <div className={classes.intro}>
            <Logo className={classes.logo} />
            <div className={classes.container}>
                <div className={classes.info}>
                    <h2 className={classes.title}>Lorem ipsum dolor sit amet consectetur</h2>
                    <p className={classes.text}>Lorem ipsum dolor sit amet consectetur adipiscing elit lectus sapien, cubilia mattis bibendum suscipit euismod metus proin convallis phasellus nisi, class fermentum id magnis accumsan vitae netus ad. Hendrerit fusce vestibulum placerat per primis mattis hac nostra maecenas aptent lacus mus venenatis.</p>
                </div>
                <div className={classes.test}>
                    <Music />
                    <Music />
                    <Music />
                </div>
            </div>
        </div>
    );
}

const useStyle = makeStyles((theme) => ({
    intro: {
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {

    },
    container: {
        width: '80%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    info: {
        width: '45%',
        height: '100%',
        padding: '0.5em',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
    title: {
        textAlign: 'left',
        margin: 0,
        padding: '0.5em',
        color: colors.violet,
    },
    text: {
        textAlign: 'left',
        width: '80%',
        margin: 0,
        padding: '0.5em',
        color: colors.colortext,
    },
    test: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
}));
export default Intro;