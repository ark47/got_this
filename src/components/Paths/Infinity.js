import React from 'react';

const infinity = () => {
    return (
        <path
            style={{
                fill:'none',
                stroke: 'rgba(0,0,0,.1)',
                strokeWidth: '1',
                strokeDasharray: '1,1'
            }}
            d="M600,400c0,0-200,0-200-200S200,0,200,0S0.024-0.345,0.024,196.994S183.001,400,200,400
        s87.183,1.16,141.757-58.92s48.385-88.677,56.146-112.045s-10.942-69.254,38.41-143.978S568.335,0,600,0s200,25.667,200,200
        S633.668,400,600,400z"
        />
    )
}

export default infinity;