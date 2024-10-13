import React from 'react';
import { Button } from './UIComponents';

const MainMenu = ({ onStartGame, onOptions, onCredits }) => {
  return (
    <div className="main-menu">
      <h1 className="main-title">Stick Figure Kids with Swords</h1>
      <div className="button-container">
        <Button onClick={onStartGame} className="menu-button">Start Game</Button>
        <Button onClick={onOptions} className="menu-button">Options</Button>
        <Button onClick={onCredits} className="menu-button">Credits</Button>
      </div>
    </div>
  );
};

export default MainMenu;