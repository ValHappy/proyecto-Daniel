import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import colors from '../../styles/colors';
import Logo from '../../components/General/Logo';
import Music from '../../components/Music/Music';
import { storage } from "../../helpers/firebase"
import Btn from '../../components/General/Btn';

function Intro({history}) {
    const [state, setState] = useState([]);
    const [isDisplay, setDisplay] = useState('none');
    const [currentAudio, setCurrentAudio] = useState(1);
    const storageReading = () => {
        storage.ref('sonidos/introduccion').listAll().then(function (res) {
            res.prefixes.forEach(function (folderRef) {
                // All the prefixes under listRef.
                // You may call listAll() recursively on them.
            });
            res.items.forEach(function (itemRef) {
                // All the items under listRef.
                itemRef.getDownloadURL().then((itemPath) => {
                    setState([...state, itemPath]);
                });
            });
        }).catch(function (error) { });
    };
    useEffect(
        () => {
            storageReading();
            // eslint-disable-next-line react-hooks/exhaustive-deps
        }, []
    );
    useEffect(
        () => {
            if (currentAudio >= 4) {
                setDisplay('');
            }
        }, [currentAudio]
    );

    const classes = useStyle();

    function handleClick({ currentTarget }) {
        history.push(currentTarget.value);
    }


    return (
        <div className={classes.intro}>
            <Logo className={classes.logo} />
            <div className={classes.container}>
                <div className={classes.info}>
                    <h1 className={classes.title}>Introducción</h1>
                    <p className={classes.text}>Lorem ipsum dolor sit amet consectetur adipiscing elit lectus sapien, cubilia mattis bibendum suscipit euismod metus proin convallis phasellus nisi, class fermentum id magnis accumsan vitae netus ad. Hendrerit fusce vestibulum placerat per primis mattis hac nostra maecenas aptent lacus mus venenatis.</p>
                </div>
                <div className={classes.test}>
                    <Music pathFile={state[0]} currentAudio={currentAudio} setCurrentAudio={setCurrentAudio} index={1} />
                    <Music pathFile={state[0]} currentAudio={currentAudio} setCurrentAudio={setCurrentAudio} index={2}/>
                    <Music pathFile={state[0]} currentAudio={currentAudio} setCurrentAudio={setCurrentAudio} index={3}/>
                    <Btn btn='Siguiente' value={"/exercise"} isDisplay={isDisplay} onClick={handleClick}/>
                </div>
            </div>
        </div>
    );
}

const useStyle = makeStyles((theme) => ({
    intro: {
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {

    },
    container: {
        width: '80%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    info: {
        width: '40%',
        height: '100%',
        padding: '0.5em',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
    title: {
        width: '80%',
        margin: 0,
        padding: '0.2em',
        textAlign: 'left',
        color: colors.blue,
    },
    text: {
        width: '80%',
        margin: 0,
        padding: '0.5em',
        textAlign: 'left',
    },
    test: {
        width: '60%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
}));
export default Intro;