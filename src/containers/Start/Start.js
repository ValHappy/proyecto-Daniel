import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import img from '../../assets/img/wallpaper.svg';
import Logo from '../../components/General/Logo';
import Btn from '../../components/General/Btn';

function Start() {
    const classes = useStyle();

    return (
        <div className={classes.start}>
            <img className={classes.img} src={img} alt="Wallpaper" />
            <div className={classes.container}>
                <Logo />
                <p >Lorem ipsum dolor as sit amet no se que</p>
                <Btn btn="Continuar" />
            </div>
        </div>
    );
}

const useStyle = makeStyles((theme) => ({
    start: {
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-end',
    },
    img: {
        width: '100%',
        opacity: 0.9,
        position: 'absolute',
        zIndex: -1,
    },
    container: {
        width: '30%',
        height: '30%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        zIndex: 1,
        top: '68%'
    }

}));

export default Start;