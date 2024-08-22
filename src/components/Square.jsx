function Square({value, onSquareClick, isDisabled}) {

return (
    <button
      className={`square ${isDisabled ? 'disabled' : ''}`}
      onClick={onSquareClick}
      disabled={isDisabled}
    >
      {value}
    </button>
  );
    
}

export default Square;