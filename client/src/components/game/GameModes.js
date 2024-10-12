import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../ui/UIComponents';

const GameModes = () => {
  const navigate = useNavigate();

  const handleModeSelect = (mode) => {
    // In a real implementation, you might want to set the game mode in a global state
    // For now, we'll just navigate to a placeholder route
    navigate(`/play/${mode}`);
  };

  return (
    <div className="game-modes">
      <h2 className="mode-title">Select Game Mode</h2>
      <div className="mode-buttons">
        <Button onClick={() => handleModeSelect('story')} className="mode-button">
          Story Mode
        </Button>
        <Button onClick={() => handleModeSelect('versus')} className="mode-button">
          Versus Mode
        </Button>
        <Button onClick={() => handleModeSelect('training')} className="mode-button">
          Training Mode
        </Button>
      </div>
      <Button onClick={() => navigate('/')} className="back-button">
        Back to Main Menu
      </Button>
    </div>
  );
};

export default GameModes;