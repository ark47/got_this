import React from 'react';
import classes from './PointerOptions.css';
import Circle from '../Pointers/Circle';
import Square from '../Pointers/Square';
import Star from '../Pointers/Star';
import Triangle from '../Pointers/Triangle';
import Octagon from '../Pointers/Octagon';
import Flower from '../Pointers/Flower';
import McDeeBurger from '../Pointers/McDeeBurger';

const pointerOptions = (props) => {
    return (
    <div className={classes.PointerOptions} style={{transform: props.show ? 'translateY(0)' : 'translateY(-100vh)', opacity: props.show ? '1' : '0'}}>
        <ul>
            <li onClick={() => props.cursorSelect('circle')}><svg height="100%" viewBox="0 0 50 50"><Circle /></svg></li>
            <li onClick={() => props.cursorSelect('square')}><svg height="100%" viewBox="0 0 50 50"><Square /></svg></li>
            <li onClick={() => props.cursorSelect('star')}><svg height="100%" viewBox="0 0 50 50"><Star /></svg></li>
            <li onClick={() => props.cursorSelect('triangle')}><svg height="100%" viewBox="0 0 50 50"><Triangle /></svg></li>
            <li onClick={() => props.cursorSelect('octagon')}><svg height="100%" viewBox="0 0 50 50"><Octagon /></svg></li>
            <li onClick={() => props.cursorSelect('flower')}><svg height="100%" viewBox="0 0 50 50"><Flower /></svg></li>
            <li onClick={() => props.cursorSelect('mcdeeburger')}><svg height="100%" viewBox="0 0 50 50"><McDeeBurger /></svg></li>
        </ul>
    </div>
    );
}

export default pointerOptions;