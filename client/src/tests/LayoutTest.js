import React, { useState, useEffect, useRef } from 'react';
import BattleArena from '../components/game/BattleArena';
import Character from '../components/core/Character';
import useInput from '../hooks/useInput';
import useCharacterController from '../hooks/useCharacterController';
import useGameLoop from '../hooks/useGameLoop';

const LayoutTest = () => {
  const input = useInput();
  const [characterPos, setCharacterPos] = useState({ x: 50, y: 50 });
  const { updateCharacter } = useCharacterController(characterPos, setCharacterPos);
  const [gameLoopCount, setGameLoopCount] = useState(0);

  // Test for useGameLoop
  useGameLoop(
    (deltaTime) => {
      setGameLoopCount(prev => prev + 1);
      updateCharacter(input, deltaTime);
    },
    () => {} // We're using React for rendering, so this is empty
  );

  return (
    <div className="layout-test">
      <h1>Component Test Layout</h1>

      <div className="component-showcase">
        <div className="showcase-item">
          <h2>Character Component</h2>
          <div style={{ position: 'relative', width: 200, height: 200, border: '1px solid black' }}>
            <Character x={75} y={50} width={50} height={100} />
          </div>
        </div>

        <div className="showcase-item">
          <h2>useCharacterController Test</h2>
          <div style={{ position: 'relative', width: 200, height: 200, border: '1px solid black' }}>
            <Character x={characterPos.x} y={characterPos.y} width={50} height={100} />
          </div>
          <p>Character Position: x: {characterPos.x.toFixed(2)}, y: {characterPos.y.toFixed(2)}</p>
        </div>

        <div className="showcase-item">
          <h2>useGameLoop Test</h2>
          <p>Game Loop Count: {gameLoopCount}</p>
        </div>

        <div className="showcase-item">
          <h2>BattleArena Component</h2>
          <BattleArena width={600} height={400} />
        </div>
      </div>

      <div className="input-display">
        <h2>Input State</h2>
        <pre>{JSON.stringify(input, null, 2)}</pre>
      </div>

      <div className="instructions">
        <h2>Instructions</h2>
        <p>Use arrow keys or WASD to move the character in the useCharacterController test and BattleArena.</p>
        <p>Press spacebar to attack (rotate sword) in BattleArena.</p>
        <p>Observe the Game Loop Count to see useGameLoop in action.</p>
        <p>Check the Input State to see which keys are currently pressed.</p>
    </div>
    </div>
  );
};

export default LayoutTest;

