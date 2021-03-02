import React from 'react';
import { makeStyles } from '@material-ui/styles';
import Button from '@material-ui/core/Button';
import colors from '../../styles/colors';

//variables
const btnWidth = 300;
const btnHeigth = 40;

function Btn(props) {
    const classes = useStyle();

    return (
        <Button className={classes.btn} variant="outlined"> {props.btn} </Button>
    );
}

const useStyle = makeStyles((theme) => ({
    btn: {
        margin: '2em',
        padding: '0.5em',
        width: btnWidth,
        height: btnHeigth,
        background: colors.blue,
        borderRadius: '0.5em',
        color: colors.white,
        
        '&:hover': {
            backgroundColor: 'none',
            borderColor: colors.blue,
            color: colors.blue,
            boxShadow: 'none',
        },
    }
}));

export default Btn;