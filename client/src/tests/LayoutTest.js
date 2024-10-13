import React, { useState, useEffect } from 'react';
import useGameLoop from '../hooks/useGameLoop';
import useInput from '../hooks/useInput';
import useCharacterController from '../hooks/useCharacterController';
import useCollisionDetection from '../hooks/useCollisionDetection';
import useAnimation from '../hooks/useAnimation';

const CHARACTER_SIZE = 50;
const OBSTACLE_SIZE = 50;

const LayoutTest = () => {
  const [position, setPosition] = useState({ x: 50, y: 50 });
  const [obstacle] = useState({ x: 200, y: 200, width: OBSTACLE_SIZE, height: OBSTACLE_SIZE });
  const input = useInput();
  const { updateCharacter } = useCharacterController(position, setPosition);
  const { checkCollision } = useCollisionDetection();
  const frames = ['Frame1', 'Frame2', 'Frame3', 'Frame4'];
  const currentFrame = useAnimation(frames, 500);

  const [frameCount, setFrameCount] = useState(0);

  useGameLoop((deltaTime) => {
    updateCharacter(input, deltaTime);
    setFrameCount(prev => prev + 1);
  });

  const characterRect = {
    x: position.x,
    y: position.y,
    width: CHARACTER_SIZE,
    height: CHARACTER_SIZE
  };

  const isColliding = checkCollision(characterRect, obstacle);

  return (
    <div className="layout-test">
      <h1>Hooks Test</h1>
      
      <div className="game-area">
        <div 
          className="character" 
          style={{ 
            left: position.x, 
            top: position.y, 
            width: CHARACTER_SIZE, 
            height: CHARACTER_SIZE 
          }}
        ></div>
        <div 
          className="obstacle" 
          style={{ 
            left: obstacle.x, 
            top: obstacle.y, 
            width: OBSTACLE_SIZE, 
            height: OBSTACLE_SIZE 
          }}
        ></div>
      </div>
      
      <div className="info-panel">
        <p>Use WASD or arrow keys to move the character</p>
        <p>Position: x: {position.x.toFixed(2)}, y: {position.y.toFixed(2)}</p>
        <p>Obstacle Position: x: {obstacle.x.toFixed(2)}, y: {obstacle.y.toFixed(2)}</p>
        <p>Obstacle Width: {obstacle.width.toFixed(2)}, Height: {obstacle.height.toFixed(2)}</p>
        <p>Character Width: {characterRect.width.toFixed(2)}, Height: {characterRect.height.toFixed(2)}</p>
        <p>Character Position: x: {characterRect.x.toFixed(2)}, y: {characterRect.y.toFixed(2)}</p>
        
        
        <p>Collision: {isColliding ? 'Yes' : 'No'}</p>
        <p>Current Animation Frame: {currentFrame}</p>
        <p>Frame Count: {frameCount}</p>
        <p>Input State: {JSON.stringify(input)}</p>
      </div>
    </div>
  );
};

export default LayoutTest;