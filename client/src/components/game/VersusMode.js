import React, { useState } from 'react';
import BattleArena from './BattleArena';
import GameHUD from './GameHud';

const VersusMode = () => {
  const [player1Health, setPlayer1Health] = useState(100);
  const [player2Health, setPlayer2Health] = useState(100);
  const [roundTime, setRoundTime] = useState(60); // 60 seconds per round

  // Placeholder for round end logic
  const endRound = () => {
    // Determine winner, reset health, etc.
    setPlayer1Health(100);
    setPlayer2Health(100);
    setRoundTime(60);
  };

  return (
    <div className="versus-mode">
      <h2>Versus Mode</h2>
      <div className="player-huds">
        <GameHUD health={player1Health} score={0} time={roundTime} />
        <GameHUD health={player2Health} score={0} time={roundTime} />
      </div>
      <BattleArena width={800} height={600} />
      <button onClick={endRound}>End Round</button>
    </div>
  );
};

export default VersusMode;