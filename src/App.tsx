import React from 'react';
import './App.css';
import Square from "./square";
import Piece from "./piece";

interface BlackSquare {
    hasPiece: boolean;
    pieceColour: string;
}

function App() {

    const board: BlackSquare[] = [];
    //Generate game board
    for (let i = 0; i < 32; i++) {
        if (i < 12) {
            board.push({hasPiece: true, pieceColour: 'red'})
        }
        else if (i > 19) {
            board.push({hasPiece: true, pieceColour: 'blue'})
        } else {
            board.push({hasPiece: false, pieceColour: ''})
        }
    }

  return (
    <div className="App">
      <svg
          width="1000px"
          height="1000px"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        {board.map((square: BlackSquare, index: number) => {
            const y: number = (Math.floor(index / 4)) * 100;
            let x: number = ((index % 4) * 200) + ((y / 100) % 2 === 0 ? 100 : 0);
            return <Square y={y} x={x} piece={square.hasPiece ? Piece({cx: (x + 50), cy: (y + 50), fill: square.pieceColour}) : null}></Square>
        })}


      </svg>
    </div>
  );
}

export default App;
