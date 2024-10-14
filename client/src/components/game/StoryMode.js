import React, { useState } from 'react';

const StoryMode = ({ onExit }) => {
  const [currentLevel, setCurrentLevel] = useState(1);

  const handleNextLevel = () => {
    setCurrentLevel(prev => prev + 1);
  };

  return (
    <div className="story-mode">
      <h2>Story Mode</h2>
      <p>Current Level: {currentLevel}</p>
      <button onClick={handleNextLevel}>Next Level</button>
      <button onClick={onExit}>Exit to Main Menu</button>
    </div>
  );
};

export default StoryMode;