import React from 'react';
import classes from './PointerOptions.css';
import Circle from '../Pointers/Circle';
import Balloon from '../Pointers/Balloon';
import Leaf from '../Pointers/Leaf';

const pointerOptions = (props) => {
    return (
    <div className={classes.PointerOptions} style={{transform: props.show ? 'translateY(0)' : 'translateY(-100vh)', opacity: props.show ? '1' : '0'}}>
        <ul>
            <li onClick={() => props.cursorSelect('circle')}><svg height="100%" viewBox="0 0 50 50"><Circle /></svg></li>
            <li onClick={() => props.cursorSelect('balloon')}><svg height="100%" viewBox="0 0 50 50"><Balloon /></svg></li>
            <li onClick={() => props.cursorSelect('leaf')}><svg height="100%" viewBox="0 0 50 50"><Leaf /></svg></li>

        </ul>
    </div>
    );
}

export default pointerOptions;