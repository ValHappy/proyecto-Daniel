import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Logo from '../../components/General/Logo';
import fb from '../../assets/social/fb.svg'
import ig from '../../assets/social/ig.svg'
import yt from '../../assets/social/yt.svg'
import wpp from '../../assets/social/wpp.svg'
import Daniel from '../../assets/img/Daniel.svg'
import colors from '../../styles/colors';

function Final() {
    const classes = useStyle();
    return (
        <div className={classes.final}>
            <div className={classes.social}>

            </div>
            <div className={classes.container}>
                <div className={classes.info}>
                    <Logo />
                    <p className={classes.description}> Lorem ipsum dolor sit amet consectetur adipiscing elit etiam condimentum, sollicitudin montes commodo rhoncus vulputate egestas hac cubilia dictumst, sociis maecenas netus porta habitasse faucibus elementum nec. Consequat orci himenaeos justo magnis sociosqu non metus, cras accumsan curabitur tincidunt eu donec, ornare vulputate nulla elementum cubilia vivamus. Condimentum ridiculus volutpat cursus sagittis justo felis tellus tempor commodo, hac posuere sociis consequat vivamus tincidunt nascetur turpis morbi ac porta habitasse faucibus elementum nec. Consequat orci himenaeos justo magnis sociosqu non metus, cras accumsan curabitur tincidunt eu donec, ornare vulputate nulla</p>
                </div>
                <div className={classes.content}>
                    <img className={classes.photo} src={Daniel} alt="Daniel Goméz Marín" />
                    <label className={classes.name}>Daniel Goméz Marín</label>
                </div>
                <div className={classes.copyContent}>
                    <label className={classes.copy}>Copyright © 2021 Musical Experience. Todos los derechos reservados</label>
                </div>
            </div>
            <div className={classes.social}>
                <img className={classes.icon} src={fb} alt="Facebook" />
                <img className={classes.icon} src={ig} alt="Instagram" />
                <img className={classes.icon} src={wpp} alt="Whatsapp" />
                <img className={classes.icon} src={yt} alt="YouTube" />
            </div>
        </div>
    );
}

const useStyle = makeStyles((theme) => ({
    final: {
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    container: {
        margin: '0 10em 0 10em',
        width: '80%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    info: {
        width: '80%',
        height: '60%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',

    },
    description: {
        margin: '0.5em',
        marginTop: 0,
        padding: '0.5em',
        textAlign: 'center',
    },
    content: {
        width: '40%',
        height: '30%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    photo: {
        margin: 0,
        padding: 0,
        width: '45%',
    },
    name: {
        margin: '0.5em',
        padding: '0.5em',
        fontStyle: 'italic',
        textTransform: 'uppercase',
        color: colors.blue,
        fontSize: '1vw',
    },
    copyContent: {
        width: '100%',
        height: '10%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    copy: {
        margin: '0.5em',
        padding: '0.5em',
    },
    social: {
        width: '10%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-end',
    },
    icon: {
        margin: '1em',
        padding: '0.5em',
        width: '30%',

        '&:hover': {
            borderRadius: '3em',
            boxShadow: '-8px 8px 15px 6px rgba(42,20,255,0.27)',
        }
    }
}));

export default Final;