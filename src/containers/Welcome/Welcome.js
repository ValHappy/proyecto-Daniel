import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Btn from '../../components/General/Btn'
import colors from "../../styles/colors";
import Logo from '../../components/General/Logo';
import Form from '../../components/Form/Form';

function Welcome() {
    const classes = useStyle();
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
        console.log('aqui se abre');
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div className={classes.welcome}>
            <Logo />
            <h1 className={classes.title}>Lorem ipsum dolor sit amet consectetur</h1>
            <p className={classes.text}>Lorem ipsum dolor sit amet consectetur adipiscing elit lectus sapien, cubilia mattis bibendum suscipit euismod metus proin convallis phasellus nisi, class fermentum id magnis accumsan vitae netus ad. Hendrerit fusce vestibulum placerat per primis mattis hac nostra maecenas aptent lacus mus venenatis, malesuada lectus leo nibh tincidunt tristique ullamcorper phasellus tempor natoque erat. Fermentum nascetur condimentum placerat vitae nec non donec eu conubia, ligula etiam magna proin hac morbi congue penatibus, tristique venenatis quisque nisl class pretium cras euismod.</p>
            <Btn onClick={handleClickOpen} btn={"Action Button"} />
            <Form open={open} handleClose={handleClose}/>
        </div>
    );
}

const useStyle = makeStyles((theme) => ({
    welcome: {
        width: '50%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        margin: '0',
        padding: '0.5em',
        color: colors.text,
        textAlign: 'center',
    },
    text: {
        margin: '0',
        padding: '1em',
        color: colors.text,
        textAlign: 'center',
    },
}));

export default Welcome;