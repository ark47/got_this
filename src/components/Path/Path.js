import React from 'react';
import StraightLine from '../Paths/StraightLine';
import Arch from '../Paths/Arch';
// import SquigglyLine from '../Paths/SquigglyLine';
// import Infinity from '../Paths/Infinity';
// import Track from '../Paths/Track';
// import McArc from '../Paths/McArc';
// import Windblown from '../Paths/Windblown';

const path = (props) => {
    let selectedPath;
    switch (props.path) {
        case ('sunset'):
            selectedPath = <Arch />
            break;
        case ('balloon'):
            selectedPath = <Arch />
            break;
        case ('classic'):
            selectedPath = <StraightLine />
            break;
        case ('default'):
            selectedPath = <StraightLine />
            break;
        default:
            selectedPath = null;
    }
    return selectedPath;
}

export default path;