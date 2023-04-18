import './App.css';
import React from 'react';

interface SquareProps {
    x: number;
    y: number;
    piece: JSX.Element | null;
}

function Square({x, y, piece}: SquareProps) {

    return (
        <React.Fragment>
                <rect x={x} y={y} width="100" height="100"/>
            {piece}
        </React.Fragment>
    );
}

export default Square;
