import React, { useState, useRef, useEffect } from 'react';
import BattleArena from '../components/game/BattleArena';
import Character from '../components/core/Character';
import GameHUD from '../components/game/GameHud';
import StoryMode from '../components/game/StoryMode';
import VersusMode from '../components/game/VersusMode';
import TrainingMode from '../components/game/TrainingMode';
import useInput from '../hooks/useInput';
import useCharacterController from '../hooks/useCharacterController';
import useGameLoop from '../hooks/useGameLoop';

const LayoutTest = () => {
  const gameContainerRef = useRef(null);
  const { input, isFocused } = useInput(gameContainerRef);
  const [characterPos, setCharacterPos] = useState({ x: 50, y: 50 });
  const { updateCharacter } = useCharacterController(characterPos, setCharacterPos);
  const [gameLoopCount, setGameLoopCount] = useState(0);

  useGameLoop(
    (deltaTime) => {
      setGameLoopCount(prev => prev + 1);
      if (isFocused) {
        updateCharacter(input, deltaTime);
      }
    },
    () => {}
  );

  // Effect to update character position based on input
  useEffect(() => {
    if (isFocused) {
      const speed = 2; // pixels per frame
      setCharacterPos(prev => ({
        x: prev.x + (input.right ? speed : input.left ? -speed : 0),
        y: prev.y + (input.down ? speed : input.up ? -speed : 0)
      }));
    }
  }, [input, isFocused]);

  return (
    <div className="layout-test">
      <h1>Component Test Layout</h1>

      <div 
        className="component-showcase" 
        ref={gameContainerRef} 
        tabIndex={0}
        style={{ outline: isFocused ? '2px solid blue' : 'none' }}
      >
        <div className="showcase-item">
          <h2>Character Component</h2>
          <div style={{ position: 'relative', width: 200, height: 200, border: '1px solid black' }}>
            <Character x={75} y={50} width={50} height={100} />
          </div>
        </div>

        <div className="showcase-item">
          <h2>useCharacterController Test</h2>
          <div style={{ position: 'relative', width: 200, height: 200, border: '1px solid black', overflow: 'hidden' }}>
            <Character x={characterPos.x} y={characterPos.y} width={50} height={100} />
          </div>
          <p>Character Position: x: {characterPos.x.toFixed(2)}, y: {characterPos.y.toFixed(2)}</p>
          <p>Game Area Focused: {isFocused ? 'Yes' : 'No'}</p>
          <p>Click here and use arrow keys or WASD to move the character</p>
        </div>

        <div className="showcase-item">
          <h2>useGameLoop Test</h2>
          <p>Game Loop Count: {gameLoopCount}</p>
        </div>

        <div className="showcase-item">
          <h2>BattleArena Component</h2>
          <BattleArena width={600} height={400} />
        </div>

        <div className="showcase-item">
          <h2>GameHUD Component</h2>
          <GameHUD health={75} score={1000} time={120} />
        </div>

        <div className="showcase-item">
          <h2>StoryMode Component</h2>
          <StoryMode />
        </div>

        <div className="showcase-item">
          <h2>VersusMode Component</h2>
          <VersusMode />
        </div>

        <div className="showcase-item">
          <h2>TrainingMode Component</h2>
          <TrainingMode />
        </div>
      </div>

      <div className="input-display">
        <h2>Input State</h2>
        <pre>{JSON.stringify(input, null, 2)}</pre>
        <p>Game Area Focused: {isFocused ? 'Yes' : 'No'}</p>
      </div>

      <div className="instructions">
        <h2>Instructions</h2>
        <p>Click on the game area (outlined in blue when focused) to enable controls.</p>
        <p>Use arrow keys or WASD to move the character in the useCharacterController test.</p>
        <p>Observe the Character Position updating as you move.</p>
        <p>Watch the Game Loop Count increase to see useGameLoop in action.</p>
        <p>Check the Input State to see which keys are currently pressed.</p>
        <p>Note: Arrow keys will only be captured when the game area is focused.</p>
      </div>
    </div>
  );
};

export default LayoutTest;