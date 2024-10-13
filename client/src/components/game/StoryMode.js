import React, { useState } from 'react';
import BattleArena from './BattleArena';
import GameHUD from './GameHud';

const StoryMode = () => {
  const [level, setLevel] = useState(1);
  const [health, setHealth] = useState(100);
  const [score, setScore] = useState(0);
  const [time, setTime] = useState(0);

  // Placeholder for level progression logic
  const progressToNextLevel = () => {
    setLevel(prevLevel => prevLevel + 1);
    setHealth(100); // Reset health for new level
  };

  return (
    <div className="story-mode">
      <h2>Story Mode - Level {level}</h2>
      <GameHUD health={health} score={score} time={time} />
      <BattleArena width={800} height={600} />
      <button onClick={progressToNextLevel}>Next Level</button>
    </div>
  );
};

export default StoryMode;