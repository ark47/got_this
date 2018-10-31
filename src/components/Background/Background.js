import React from 'react';
import classes from './Background.css';
import Sky from '../Backgrounds/Sky'
import Sunset from '../Backgrounds/Sunset'

const background = (props) => {
    let selectedBackground;
    switch (props.background) {
        case ('sunset'):
            selectedBackground = <Sunset />
            break;
        case ('balloon'):
            selectedBackground = <Sky />
            break;
        case ('classic'):
            selectedBackground = <div style={{backgroundColor: 'black'}} className={classes.Background} />
            break;
        default:
            selectedBackground = null;
    }
    return selectedBackground;
}

export default background;