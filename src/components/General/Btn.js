import React from 'react';
import { makeStyles } from '@material-ui/styles';
import Button from '@material-ui/core/Button';
import colors from '../../styles/colors';

//variables
const btnWidth = '35vh';
const btnHeigth = 40;

function Btn({onClick,btn,value="", isDisplay}) {
    const classes = useStyle();
    console.log(isDisplay)
    return (
        <Button onClick={onClick} className={classes.btn} value={value} variant="outlined" style={{display: isDisplay}} > {btn} </Button>
    );
}

const useStyle = makeStyles((theme) => ({
    btn: {
        margin: '1em',
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