import React from 'react';

const squigglyLine = () => {
    return (
        <path
            style={{
                fill:'none',
                // stroke: 'rgba(0,0,0,.1)',
                // strokeWidth: '1',
                // strokeDasharray: '1,1'
            }}
            d="M29,25C29.833,178.667,99,271.334,257,271.334 S475.5,81,375.5,81S305,271.334,800,25"
            id="squiggle"
        />
    )
}

export default squigglyLine;