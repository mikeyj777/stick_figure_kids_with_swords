import { useCallback } from 'react';

const useCharacterController = (position, setPosition) => {
  const updateCharacter = useCallback((input, deltaTime) => {
    const speed = 0.2; // pixels per millisecond
    const distance = speed * deltaTime;

    setPosition(prev => ({
      x: prev.x + (input.right ? distance : input.left ? -distance : 0),
      y: prev.y + (input.down ? distance : input.up ? -distance : 0),
    }));
  }, [setPosition]);

  return { updateCharacter };
};

export default useCharacterController;