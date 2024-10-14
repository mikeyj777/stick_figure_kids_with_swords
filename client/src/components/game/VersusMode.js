import React, { useState } from 'react';

const VersusMode = ({ onExit }) => {
  const [player1Score, setPlayer1Score] = useState(0);
  const [player2Score, setPlayer2Score] = useState(0);

  const handleScoreUpdate = (player) => {
    if (player === 1) setPlayer1Score(prev => prev + 1);
    else setPlayer2Score(prev => prev + 1);
  };

  return (
    <div className="versus-mode">
      <h2>Versus Mode</h2>
      <div className="scores">
        <p>Player 1: {player1Score}</p>
        <p>Player 2: {player2Score}</p>
      </div>
      <button onClick={() => handleScoreUpdate(1)}>Player 1 Scores</button>
      <button onClick={() => handleScoreUpdate(2)}>Player 2 Scores</button>
      <button onClick={onExit}>Exit to Main Menu</button>
    </div>
  );
};

export default VersusMode;