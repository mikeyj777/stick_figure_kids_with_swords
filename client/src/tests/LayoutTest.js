import React, { useState, useRef, useEffect, useCallback } from 'react';
import Character from '../components/core/Character';
import Stage from '../components/core/Stage';
import Hitbox, { checkCollision } from '../components/core/Hitbox';
import useInput from '../hooks/useInput';
import useGameLoop from '../hooks/useGameLoop';

const characterTypes = ['Knight', 'Wizard', 'Archer'];
const characterColors = {
  Knight: '#C0C0C0',
  Wizard: '#4B0082',
  Archer: '#228B22'
};

const LayoutTest = () => {
  const gameContainerRef = useRef(null);
  const { input, isFocused } = useInput(gameContainerRef);
  const [characters, setCharacters] = useState([]);
  const [obstacles] = useState([
    { x: 100, y: 300, width: 50, height: 50 },
    { x: 300, y: 200, width: 100, height: 30 },
  ]);
  const [frameCount, setFrameCount] = useState(0);

  useEffect(() => {
    setCharacters([
      { type: 'Knight', x: 50, y: 350, hp: 100, direction: 0 },
      { type: 'Wizard', x: 150, y: 350, hp: 75, direction: Math.PI / 4 },
      { type: 'Archer', x: 250, y: 350, hp: 85, direction: -Math.PI / 4 },
    ]);
  }, []);

  const updateGame = useCallback((deltaTime) => {
    setFrameCount(prevCount => prevCount + 1);

    if (isFocused) {
      setCharacters(prevChars => prevChars.map(char => {
        let newX = char.x + (input.right ? 2 : input.left ? -2 : 0);
        let newY = char.y + (input.down ? 2 : input.up ? -2 : 0);

        // Simple collision detection with obstacles
        const charHitbox = { x: newX - 20, y: newY - 40, width: 40, height: 80 };
        const colliding = obstacles.some(obs => checkCollision(charHitbox, obs));

        if (!colliding) {
          return { ...char, x: newX, y: newY };
        }
        return char;
      }));
    }
  }, [isFocused, input, obstacles]);

  useGameLoop(updateGame);

  return (
    <div className="layout-test" ref={gameContainerRef} tabIndex={0}>
      <h1>Core Components Test</h1>
      <div className="game-container">
        <Stage width={400} height={400} obstacles={obstacles} />
        <svg width={400} height={400} style={{ position: 'absolute', top: 0, left: 0 }}>
          {characters.map((char, index) => (
            <g key={index}>
              <Character 
                {...char} 
                color={characterColors[char.type]} 
              />
              <Hitbox 
                x={char.x - 20} 
                y={char.y - 40} 
                width={40} 
                height={80} 
                active={true} 
              />
            </g>
          ))}
          {obstacles.map((obs, index) => (
            <Hitbox key={index} {...obs} active={false} />
          ))}
        </svg>
      </div>
      <div className="instructions">
        <p>Use arrow keys or WASD to move all characters.</p>
        <p>Game Area Focused: {isFocused ? 'Yes' : 'No'}</p>
        <p>Characters will stop when colliding with obstacles.</p>
        <p>Frame Count: {frameCount}</p>
      </div>
    </div>
  );
};

export default LayoutTest;