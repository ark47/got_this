import React from 'react';

const track = () => {
    return (
        <path 
            style={{
                fill:'none',
                stroke: 'rgba(0,0,0,.1)',
                strokeWidth: '1',
                strokeDasharray: '1,1'
            }}
            d="M800,262.667C800,338.514,738.514,400,662.667,400H137.333C61.486,400,0,338.514,0,262.667V137.333
        C0,61.486,61.486,0,137.333,0h525.334C738.514,0,800,61.486,800,137.333V262.667z"
        />
    )
}

export default track;