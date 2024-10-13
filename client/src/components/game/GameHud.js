import React from 'react';

const GameHUD = ({ health, score, time }) => {
  return (
    <div className="game-hud">
      <div className="health-bar">
        <div className="health-bar-fill" style={{ width: `${health}%` }}></div>
        <span className="health-text">{health}%</span>
      </div>
      <div className="score">Score: {score}</div>
      <div className="time">Time: {time}</div>
    </div>
  );
};

export default GameHUD;