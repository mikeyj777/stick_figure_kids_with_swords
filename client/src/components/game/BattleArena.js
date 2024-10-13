import React, { useState } from 'react';
import Stage from '../core/Stage';
import Character from '../core/Character';
import Sword from '../core/Sword';
import Hitbox from '../core/Hitbox';
import useGameLoop from '../../hooks/useGameLoop';
import useInput from '../../hooks/useInput';
import useCharacterController from '../../hooks/useCharacterController';

const BattleArena = ({ width, height }) => {
  const [characterPos, setCharacterPos] = useState({ x: 100, y: 400 });
  const [swordAngle, setSwordAngle] = useState(0);

  const input = useInput();
  const { updateCharacter } = useCharacterController(characterPos, setCharacterPos);

  useGameLoop(
    (deltaTime) => {
      updateCharacter(input, deltaTime);
      setSwordAngle(prev => (input.attack ? prev + 0.1 : prev));
    },
    () => {} // We're using React for rendering, so this is empty
  );

  return (
    <div style={{ position: 'relative', width, height }}>
      <Stage width={width} height={height} />
      <Character x={characterPos.x} y={characterPos.y} width={50} height={100} />
      <Sword x={characterPos.x + 25} y={characterPos.y + 25} length={50} angle={swordAngle} />
      <Hitbox x={characterPos.x} y={characterPos.y} width={50} height={100} active={true} />
    </div>
  );
};

export default BattleArena;