import React from 'react';
import { Button, colors, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, makeStyles, TextField } from '@material-ui/core';
import Btn from '../General/Btn';

function Form({ handleClose, open }) {

    const classes = useStyle();

    const handleClickNext = () => {
        console.log('aqui pasa a la siguiente');
    };

    return (
        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title" maxWidth="sm">
            <DialogTitle className={classes.title}>Registrate</DialogTitle>

            <DialogContent className={classes.container}>
                <DialogContentText className={classes.text}>
                    Lorem ipsum dolor sit amet consectetur adipiscing elit lectus sapien, cubilia mattis bibendum suscipit euismod metus proin convallis phasellus nisi, class fermentum id magnis accumsan vitae netus ad. Hendrerit fusce vestibulum placerat per primis mattis hac nostra maecenas aptent lacus mus venenatis, malesuada lectus leo nibh tincidunt tristique ullamcorper phasellus tempor natoque erat
                </DialogContentText>
                <div className={classes.fields}>
                    <TextField
                        className={classes.field}
                        id="name"
                        label="Nombre Completo"
                        type="string"
                        autoComplete="auto-name"
                        variant="outlined"
                        size="medium"
                    />

                    <TextField
                        className={classes.field}
                        id="email"
                        label="Correo electronico"
                        type="email"
                        autoComplete="auto-email"
                        variant="outlined"
                        size="medium"
                    />
                </div>
            </DialogContent>

            <DialogActions className={classes.action}>
                <Btn onClick={handleClickNext} btn={"Siguiente"} />
            </DialogActions>
        </Dialog>
    );
}

const useStyle = makeStyles((theme) => ({
    fields: {
        width: '100%',
        height: '100%',
        margin: '0.5em',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    field: {
        width: '60%',
        margin: '0.2em',
        marginTop: '2em',
    },
    title: {
        margin: '0',
        marginTop: '2em',
        padding: '0.5em',
        color: colors.text,
        textAlign: 'center',
    },
    container: {
        margin: 0,
    },
    text: {
        margin: '0',
        padding: '1em',
        color: colors.text,
        textAlign: 'center',
    },
    action: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
}));

export default Form;