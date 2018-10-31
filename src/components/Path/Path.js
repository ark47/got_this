import React from 'react';
import StraightLine from '../Paths/StraightLine';
import Windblown from '../Paths/Windblown';
import Arch from '../Paths/Arch';
// import Infinity from '../Paths/Infinity';
// import Track from '../Paths/Track';
// import McArc from '../Paths/McArc';

const path = (props) => {
    let selectedPath;
    switch (props.path) {
        case ('sunset'):
            selectedPath = <Windblown />
            break;
        case ('balloon'):
            selectedPath = <Arch />
            break;
        case ('classic'):
            selectedPath = <StraightLine />
            break;
        default:
            selectedPath = null;
    }
    return selectedPath;
}

export default path;