import React from 'react';

const straightLine = () => {
    return (
        <path
            d="M0,100 L800,100"
            id="straight"
            style={{
                fill:'none',
                stroke: 'rgba(0,0,0,.1)',
                strokeWidth: '1',
                strokeDasharray: '1,1'
            }}
        />
    )
}

export default straightLine;