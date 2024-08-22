import React from 'react';
import Square from './Square';

function Board({ xIsNext, squares, onPlay, winner }) {
   function handleClick(i) {
    if (squares[i]) {
      return;
    }
    const nextSquares = squares.slice();
    nextSquares[i] = xIsNext ? '✕' : '◯';
    onPlay(nextSquares);
  }

 return (
    <>
      <div className="board">
        <div className="board-row">
          <Square value={squares[0]} onSquareClick={() => handleClick(0)} isDisabled={!!winner} />
          <Square value={squares[1]} onSquareClick={() => handleClick(1)} isDisabled={!!winner} />
          <Square value={squares[2]} onSquareClick={() => handleClick(2)} isDisabled={!!winner} />
        </div>
        <div className="board-row">
          <Square value={squares[3]} onSquareClick={() => handleClick(3)} isDisabled={!!winner} />
          <Square value={squares[4]} onSquareClick={() => handleClick(4)} isDisabled={!!winner} />
          <Square value={squares[5]} onSquareClick={() => handleClick(5)} isDisabled={!!winner} />
        </div>
        <div className="board-row">
          <Square value={squares[6]} onSquareClick={() => handleClick(6)} isDisabled={!!winner} />
          <Square value={squares[7]} onSquareClick={() => handleClick(7)} isDisabled={!!winner} />
          <Square value={squares[8]} onSquareClick={() => handleClick(8)} isDisabled={!!winner} />
        </div>
      </div>
    </>
  );
}
  

export default Board;