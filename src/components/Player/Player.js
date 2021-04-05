import React, { useState, useEffect } from 'react';
import { IconButton, makeStyles } from '@material-ui/core';
import Timeline from '../General/Timeline';
import { PlayCircleFilledRounded } from '@material-ui/icons';
import colors from '../../styles/colors';

const playerWidth = '35vh';
const playerHeight = '3em';

function Player({ pathFile, currentAudio, setCurrentAudio, index, reproLimit }) {
    const classes = useStyle();
    const audioIntro = new Audio(pathFile);
    const [reproTimes, setReproTimes] = useState(1);
    const [audioDuration, setAudioDuration] = useState();
    const [progress, setProgress] = React.useState(0);
    const [currentTime, setCurrentTime] = React.useState(0);
    const [disableButton, setDisableButton] = useState(index === currentAudio ? false : true);

    useEffect(() => {
        if (index === currentAudio) setDisableButton(false);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentAudio])

    audioIntro.addEventListener('loadedmetadata', function () {
        // Obtain the duration in seconds of the audio file (with milliseconds as well, a float value)
        const duration = audioIntro.duration;
        const durationFixed = duration.toFixed(0);
        setAudioDuration(durationFixed);
    }, false);

    audioIntro.addEventListener('timeupdate', () => {

        // on update, retrieve currentTime from ref,
        // store it in state
        const time = audioIntro.currentTime;
        const timeFixed = time.toFixed(0);
        setCurrentTime(timeFixed);
        const currentProgress = (timeFixed / audioDuration) * 100;
        setProgress(currentProgress);


    });

    audioIntro.addEventListener("ended", function () {
        if (!!currentAudio) {
            setCurrentAudio(currentAudio + 1);
        } else if (!!reproLimit){
            setReproTimes(reproTimes + 1);
            if (reproTimes === reproLimit) {
                setDisableButton(true);
            } else {
                setDisableButton(false);
            }
        }
    });

    const handleClick = (e) => {
        audioIntro.play();
        setDisableButton(true);
    }

    return (
        <div className={classes.player}>
            <IconButton onClick={handleClick} disabled={disableButton}>
                <PlayCircleFilledRounded />
            </IconButton>
            <Timeline audioDuration={audioDuration} progress={progress} timeCurrent={currentTime} />
        </div>
    );
}

const useStyle = makeStyles((theme) => ({
    player: {
        width: playerWidth,
        height: playerHeight,
        margin: '0.5em',
        padding: '1em',
        borderRadius: '0.5em',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: colors.background,
    }

}));
export default Player;