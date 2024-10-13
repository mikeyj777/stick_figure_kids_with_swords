import React, { useState, useRef, useEffect } from 'react';
import BattleArena from '../components/game/BattleArena';
import Character from '../components/core/Character';
import GameHUD from '../components/game/GameHud';
import StoryMode from '../components/game/StoryMode';
import VersusMode from '../components/game/VersusMode';
import TrainingMode from '../components/game/TrainingMode';
import GameOver from '../components/game/GameOver';
import CharacterSelect from '../components/ui/CharacterSelect';
import useInput from '../hooks/useInput';
import useCharacterController from '../hooks/useCharacterController';
import useGameLoop from '../hooks/useGameLoop';
import useCollisionDetection from '../hooks/useCollisionDetection';
import useAnimation from '../hooks/useAnimation';

const LayoutTest = () => {
  const gameContainerRef = useRef(null);
  const { input, isFocused } = useInput(gameContainerRef);
  const [characterPos, setCharacterPos] = useState({ x: 50, y: 50 });
  const { updateCharacter } = useCharacterController(characterPos, setCharacterPos);
  const [gameLoopCount, setGameLoopCount] = useState(0);
  const [selectedCharacter, setSelectedCharacter] = useState(null);
  const { checkCollision } = useCollisionDetection();
  
  // Simple animation frames for demonstration
  const animationFrames = ['Frame1', 'Frame2', 'Frame3', 'Frame4'];
  const currentAnimationFrame = useAnimation(animationFrames, 200);

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

  // Collision detection test
  const obstacle = { x: 100, y: 100, width: 50, height: 50 };
  const isColliding = checkCollision(
    { x: characterPos.x, y: characterPos.y, width: 50, height: 100 },
    obstacle
  );

  return (
    <div className="layout-test">
      <h1>Component Test Layout</h1>

      <div 
        className="component-showcase" 
        ref={gameContainerRef} 
        tabIndex={0}
        style={{ outline: isFocused ? '2px solid blue' : 'none' }}
      >
        {/* Existing components */}
        {/* ... */}

        <div className="showcase-item">
          <h2>GameOver Component</h2>
          <GameOver 
            score={1000} 
            onRestart={() => console.log('Restart')} 
            onMainMenu={() => console.log('Main Menu')} 
          />
        </div>

        <div className="showcase-item">
          <h2>CharacterSelect Component</h2>
          <CharacterSelect onSelect={setSelectedCharacter} />
          {selectedCharacter && <p>Selected: {selectedCharacter.name}</p>}
        </div>

        <div className="showcase-item">
          <h2>useCollisionDetection Test</h2>
          <div style={{ position: 'relative', width: 200, height: 200, border: '1px solid black' }}>
            <div style={{
              position: 'absolute',
              left: characterPos.x,
              top: characterPos.y,
              width: 50,
              height: 100,
              backgroundColor: isColliding ? 'red' : 'green'
            }}></div>
            <div style={{
              position: 'absolute',
              left: obstacle.x,
              top: obstacle.y,
              width: obstacle.width,
              height: obstacle.height,
              backgroundColor: 'gray'
            }}></div>
          </div>
          <p>Collision: {isColliding ? 'Yes' : 'No'}</p>
        </div>

        <div className="showcase-item">
          <h2>useAnimation Test</h2>
          <p>Current Animation Frame: {currentAnimationFrame}</p>
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
        <p>Observe the collision detection as the character moves.</p>
        <p>Watch the animation frame change in the useAnimation test.</p>
        <p>Interact with the CharacterSelect and GameOver components.</p>
      </div>
    </div>
  );
};

export default LayoutTest;