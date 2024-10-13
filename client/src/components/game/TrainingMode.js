import React, { useState } from 'react';
import BattleArena from './BattleArena';
import GameHUD from './GameHud';

const TrainingMode = () => {
  const [health, setHealth] = useState(100);
  const [comboCount, setComboCount] = useState(0);

  const resetTraining = () => {
    setHealth(100);
    setComboCount(0);
  };

  return (
    <div className="training-mode">
      <h2>Training Mode</h2>
      <GameHUD health={health} score={comboCount} time={0} />
      <BattleArena width={800} height={600} />
      <div className="training-controls">
        <button onClick={() => setHealth(prevHealth => Math.min(prevHealth + 10, 100))}>Heal</button>
        <button onClick={() => setComboCount(prevCount => prevCount + 1)}>Increment Combo</button>
        <button onClick={resetTraining}>Reset</button>
      </div>
      <div className="move-list">
        <h3>Move List</h3>
        <ul>
          <li>Attack: Spacebar</li>
          <li>Move: Arrow Keys or WASD</li>
          {/* Add more moves as you implement them */}
        </ul>
      </div>
    </div>
  );
};

export default TrainingMode;