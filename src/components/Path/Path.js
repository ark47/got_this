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
        case ('FireBrick'):
            selectedPath = <Windblown />
            break;
        case ('DarkCyan'):
            selectedPath = <Arch />
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