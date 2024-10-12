import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from './UIComponents';

const MainMenu = () => {
  const navigate = useNavigate();

  return (
    <div className="main-menu">
      <h1 className="game-title">Stick Figure Kids with Swords</h1>
      <div className="menu-buttons">
        <Button onClick={() => navigate('/play')}>Play</Button>
        <Button onClick={() => navigate('/options')}>Options</Button>
        <Button onClick={() => navigate('/credits')}>Credits</Button>
      </div>
    </div>
  );
};

export default MainMenu;