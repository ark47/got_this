import React from 'react';
import Circle from '../../components/Pointers/Circle';
import Balloon from '../../components/Pointers/Balloon';
import Leaf from '../../components/Pointers/Leaf';

const pointer = (props) => {
    let selectedCursor;
    switch (props.cursor) {
        case ('balloon'):
            selectedCursor = <Balloon />
            break;
        case ('classic'):
            selectedCursor = <Circle />
            break;
        case ('sunset'):
            selectedCursor = <Leaf />
            break;
        default:
            selectedCursor = null;
    }
    return selectedCursor;
}

export default pointer;