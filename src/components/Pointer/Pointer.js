import React from 'react';
import Circle from '../../components/Pointers/Circle';
import Square from '../../components/Pointers/Square';
import Star from '../../components/Pointers/Star';
import Triangle from '../../components/Pointers/Triangle';
import Octagon from '../../components/Pointers/Octagon';
import Flower from '../../components/Pointers/Flower';
import McDeeBurger from '../../components/Pointers/McDeeBurger';

const pointer = (props) => {
    let selectedCursor;
    switch (props.cursor) {
        case ('triangle'):
            selectedCursor = <Triangle />
            break;
        case ('square'):
            selectedCursor = <Square />
            break;
        case ('star'):
            selectedCursor = <Star />
            break;
        case ('octagon'):
            selectedCursor = <Octagon />
            break;
        case ('flower'):
            selectedCursor = <Flower />
            break;
        case ('circle'):
            selectedCursor = <Circle />
            break;
        case ('mcdeeburger'):
            selectedCursor = <McDeeBurger />
            break;
        default:
            selectedCursor = null;
    }
    return selectedCursor;
}

export default pointer;