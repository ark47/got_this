import React from 'react';
import Circle from '../../components/Pointers/Circle';
import Balloon from '../../components/Pointers/Balloon';
import Leaf from '../../components/Pointers/Leaf';
import DefaultPointer from '../../components/Pointers/DefaultPointer';

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
        case ('default'):
            selectedCursor = <DefaultPointer />
            break;
        default:
            selectedCursor = null;
    }
    return selectedCursor;
}

export default pointer;