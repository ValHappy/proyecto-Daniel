import React from 'react';
import { makeStyles } from '@material-ui/core';
import logo from "../../assets/img/logo.svg"

const logoWidth = 350;

function Logo() {
    const classes = useStyle();

    return (
        <img className={classes.logo} src={logo} alt="Musical Experience"></img>
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