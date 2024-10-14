import React, { useState } from 'react';
import GameHUD from '../components/game/GameHud';
import GameOver from '../components/game/GameOver';
import StoryMode from '../components/game/StoryMode';
import VersusMode from '../components/game/VersusMode';
import TrainingMode from '../components/game/TrainingMode';
import { Button } from '../components/ui/UIComponents';

const LayoutTest = () => {
  const [currentMode, setCurrentMode] = useState(null);
  const [health, setHealth] = useState(100);
  const [score, setScore] = useState(0);
  const [time, setTime] = useState(0);

  const handleExitMode = () => {
    setCurrentMode(null);
  };

  const renderMode = () => {
    switch(currentMode) {
      case 'story':
        return <StoryMode onExit={handleExitMode} />;
      case 'versus':
        return <VersusMode onExit={handleExitMode} />;
      case 'training':
        return <TrainingMode onExit={handleExitMode} />;
      case 'gameover':
        return <GameOver score={score} onRestart={() => setCurrentMode('story')} onMainMenu={handleExitMode} />;
      default:
        return null;
    }
  };

  return (
    <div className="layout-test">
      <h1>Game Components Test</h1>

      <div className="game-area">
        <GameHUD health={health} score={score} time={time} />
        {renderMode()}
      </div>

      <div className="controls">
        <Button onClick={() => setCurrentMode('story')}>Story Mode</Button>
        <Button onClick={() => setCurrentMode('versus')}>Versus Mode</Button>
        <Button onClick={() => setCurrentMode('training')}>Training Mode</Button>
        <Button onClick={() => setCurrentMode('gameover')}>Game Over</Button>
        <Button onClick={() => setHealth(prev => Math.max(0, prev - 10))}>Decrease Health</Button>
        <Button onClick={() => setScore(prev => prev + 100)}>Increase Score</Button>
        <Button onClick={() => setTime(prev => prev + 10)}>Increase Time</Button>
      </div>
    </div>
  );
};

export default LayoutTest;