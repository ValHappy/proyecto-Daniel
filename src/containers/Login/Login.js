import React from 'react';
import { makeStyles, TextField } from '@material-ui/core';
import Btn from '../../components/General/Btn';
import Logo from '../../components/General/Logo';
import colors from '../../styles/colors';

function Login() {
    const classes = useStyle();

    return (
        <div className={classes.login}>
            <div className={classes.img}>

            </div>
            <div className={classes.container}>
                <div className={classes.logo}>
                    <Logo />
                </div>
                <div className={classes.content}>
                    <TextField
                        className={classes.field}
                        id="user"
                        label="Usuario"
                        type="string"
                        autoComplete="auto-name"
                        variant="outlined"
                        size="medium"
                    />
                    <TextField
                        className={classes.field}
                        id="password"
                        label="Contraseña"
                        type="password"
                        autoComplete="auto-pass"
                        variant="outlined"
                        size="medium"
                    />
                    <Btn btn="Ingresar" />
                </div>
            </div>
        </div>

    );
}

const useStyle = makeStyles(() => ({
    login: {
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    img: {
        width: '50%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: colors.blue,
    },
    logo: {
        width: '100%',
        height: '50%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    container: {
        width: '50%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    content: {
        width: '100%',
        height: '50%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    field: {
        width: '50%',
        margin: '1em',
    },
}));

export default Login;