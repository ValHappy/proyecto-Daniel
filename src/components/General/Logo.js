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
        margin: '1em',
        padding: '2em',
    },
}));

export default Logo;