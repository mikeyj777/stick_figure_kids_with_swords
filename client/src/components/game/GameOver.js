import React from 'react';

const GameOver = ({ score, onRestart, onMainMenu }) => {
  return (
    <div className="game-over">
      <h2>Game Over</h2>
      <p>Your Score: {score}</p>
      <button onClick={onRestart}>Restart</button>
      <button onClick={onMainMenu}>Main Menu</button>
    </div>
  );
};

export default GameOver;