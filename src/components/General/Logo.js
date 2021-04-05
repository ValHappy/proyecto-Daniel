import React from 'react';
import { makeStyles } from '@material-ui/core';
import {ReactComponent as LogoSrc} from "../../assets/img/logo.svg"

const logoWidth = '20em';

function Logo() {
    const classes = useStyle();

    return (
        <LogoSrc className={classes.logo} />        
    );
}
const useStyle = makeStyles((theme) => ({
    logo: {
        width: logoWidth,
        margin: '0.5em',
        padding: '1em',
    },
}));

export default Logo;