import React from 'react';
import StraightLine from '../Paths/StraightLine';
import SquigglyLine from '../Paths/SquigglyLine';
import Infinity from '../Paths/Infinity';
import Track from '../Paths/Track';
import McArc from '../Paths/McArc';

const path = (props) => {
    let selectedPath;
    switch (props.path) {
        case ('FireBrick'):
            selectedPath = <McArc />
            break;
        case ('DarkCyan'):
            selectedPath = <Track />
            break;
        case ('MediumVioletRed'):
            selectedPath = null
            break;
        case ('SeaGreen'):
            selectedPath = <Infinity />
            break;
        case ('SteelBlue'):
            selectedPath = <SquigglyLine />
            break;
        case ('Tomato'):
            selectedPath = <StraightLine />
            break;
        default:
            selectedPath = null;
    }
    return selectedPath;
}

export default path;