import React from 'react';
import classes from './Background.css';
import Mountain from '../Backgrounds/Mountain';
import McDeeBG from '../Backgrounds/McDeeBG';
import Sky from '../Backgrounds/Sky'
import Sunset from '../Backgrounds/Sunset'

const background = (props) => {
    let selectedBackground;
    switch (props.background) {
        case ('mcdeebg'):
            selectedBackground = <McDeeBG />
            break;
        case ('DarkCyan'):
            selectedBackground = <div style={{backgroundColor: 'DarkCyan'}} className={classes.Background} />
            break;
        case ('sunset'):
            selectedBackground = <Sunset />
            break;
        case ('sky'):
            selectedBackground = <Sky />
            break;
        case ('mountain'):
            selectedBackground = <Mountain />
            break;
        case ('Tomato'):
            selectedBackground = <div style={{backgroundColor: 'Tomato'}} className={classes.Background} />
            break;
        default:
            selectedBackground = null;
    }
    return selectedBackground;
}

export default background;