import { useRef, useEffect } from 'react';

const useGameLoop = (updateFunction) => {
  const requestRef = useRef();
  const previousTimeRef = useRef();

  const gameLoop = (time) => {
    if (previousTimeRef.current !== undefined) {
      const deltaTime = time - previousTimeRef.current;
      updateFunction(deltaTime);
    }
    previousTimeRef.current = time;
    requestRef.current = requestAnimationFrame(gameLoop);
  };

  useEffect(() => {
    requestRef.current = requestAnimationFrame(gameLoop);
    return () => cancelAnimationFrame(requestRef.current);
  }, [updateFunction]); // Add updateFunction to the dependency array

  return null; // This hook doesn't need to return anything
};

export default useGameLoop;