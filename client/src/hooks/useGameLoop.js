import { useRef, useEffect } from 'react';

const useGameLoop = (update) => {
  const requestRef = useRef();
  const previousTimeRef = useRef();

  const gameLoop = (time) => {
    if (previousTimeRef.current !== undefined) {
      const deltaTime = time - previousTimeRef.current;
      update(deltaTime);
    }
    previousTimeRef.current = time;
    requestRef.current = requestAnimationFrame(gameLoop);
  };

  useEffect(() => {
    requestRef.current = requestAnimationFrame(gameLoop);
    return () => cancelAnimationFrame(requestRef.current);
  }, [update]);

  return null;
};

export default useGameLoop;