import React, { useState } from 'react';
import Board from './Board';
import CalculateWinner from './CalculateWinner';

function Game() {
  const [xIsNext, setXIsNext] = useState(true);
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const currentSquares = history[history.length - 1];

  const winner = CalculateWinner(currentSquares);
  const isBoardFull = currentSquares.every(square => square !== null);

  let status;
  if (winner) {
    status = 'Winner: ' + winner;
  } else if (isBoardFull) {
    status = 'Good game! No one wins!';
  } else {
    status = 'Next player: ' + (xIsNext ? '✕' : '◯');
  }

 function handlePlay(nextSquares) {
    if (winner) return;
    setHistory([...history, nextSquares]);
    setXIsNext(!xIsNext);
  }

   function handleClickPlayAgain() {
    setHistory([Array(9).fill(null)]);
    setXIsNext(true);
  }

 return (
    <>
      <div className="game">
        <div className="status">{status}</div>
        <div className={`game-board ${winner || isBoardFull ? 'with-winner' : ''}`}>
          <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} winner={winner || isBoardFull} />
        </div>
        <div className="game-info"></div>
        {(winner || isBoardFull) && (
          <button className="play-again-button" onClick={handleClickPlayAgain}>
            Play Again
          </button>
        )}
      </div>
    </>
  );
}
       
export default Game;