import React from 'react';
import { Dialog, DialogActions, DialogContent, makeStyles, TextField } from '@material-ui/core';
import Btn from '../General/Btn';
import colors from '../../styles/colors';
import { withRouter } from 'react-router-dom';

function Form({ handleClose, open, history }) {

    const classes = useStyle();

    function handleClick({ currentTarget }) {
        history.push(currentTarget.value);
    }


    return (
        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title" maxWidth="sm">
            <h1 className={classes.title}>Registrate</h1>

            <DialogContent className={classes.container}>
                <p className={classes.text}>
                    Lorem ipsum dolor sit amet consectetur adipiscing elit lectus sapien, cubilia mattis bibendum suscipit euismod metus proin convallis phasellus nisi, class fermentum id magnis accumsan vitae netus ad. Hendrerit fusce vestibulum placerat per primis mattis hac nostra.
                </p>
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

            <DialogActions className={classes.action} >
                <Btn btn={"Siguiente"} value={"/intro"} onClick={handleClick} />
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
        marginTop: '2em',
        color: colors.blue,
        textAlign: 'center',
    },
    container: {
        margin: 0,
    },
    text: {
        margin: '0',
        padding: '1em',
        color: colors.colortext,
        textAlign: 'center',
    },
    action: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: '2.5em',
    },
}));

export default withRouter(Form);