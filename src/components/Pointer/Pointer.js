import React from 'react';
import Circle from '../../components/Pointers/Circle';
import Balloon from '../../components/Pointers/Balloon';

const pointer = (props) => {
    let selectedCursor;
    switch (props.cursor) {
        case ('balloon'):
            selectedCursor = <Balloon />
            break;
        case ('circle'):
            selectedCursor = <Circle />
            break;
        default:
            selectedCursor = null;
    }
    return selectedCursor;
}

export default pointer;