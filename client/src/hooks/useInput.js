import { useState, useEffect, useCallback } from 'react';

const useInput = (gameContainerRef) => {
  const [input, setInput] = useState({
    up: false,
    down: false,
    left: false,
    right: false,
    attack: false,
  });
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = useCallback(() => setIsFocused(true), []);
  const handleBlur = useCallback(() => setIsFocused(false), []);

  useEffect(() => {
    const gameContainer = gameContainerRef?.current;
    if (gameContainer) {
      gameContainer.addEventListener('focus', handleFocus);
      gameContainer.addEventListener('blur', handleBlur);
    }

    return () => {
      if (gameContainer) {
        gameContainer.removeEventListener('focus', handleFocus);
        gameContainer.removeEventListener('blur', handleBlur);
      }
    };
  }, [gameContainerRef, handleFocus, handleBlur]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (!isFocused) return; // Only handle keys when focused

      switch (event.key.toLowerCase()) {
        case 'w':
        case 'arrowup':
          event.preventDefault();
          setInput(prev => ({ ...prev, up: true }));
          break;
        case 's':
        case 'arrowdown':
          event.preventDefault();
          setInput(prev => ({ ...prev, down: true }));
          break;
        case 'a':
        case 'arrowleft':
          event.preventDefault();
          setInput(prev => ({ ...prev, left: true }));
          break;
        case 'd':
        case 'arrowright':
          event.preventDefault();
          setInput(prev => ({ ...prev, right: true }));
          break;
        case ' ':
          event.preventDefault();
          setInput(prev => ({ ...prev, attack: true }));
          break;
        default: break;
      }
    };

    const handleKeyUp = (event) => {
      if (!isFocused) return; // Only handle keys when focused

      switch (event.key.toLowerCase()) {
        case 'w':
        case 'arrowup':    setInput(prev => ({ ...prev, up: false })); break;
        case 's':
        case 'arrowdown':  setInput(prev => ({ ...prev, down: false })); break;
        case 'a':
        case 'arrowleft':  setInput(prev => ({ ...prev, left: false })); break;
        case 'd':
        case 'arrowright': setInput(prev => ({ ...prev, right: false })); break;
        case ' ':          setInput(prev => ({ ...prev, attack: false })); break;
        default: break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, [isFocused]);

  return { input, isFocused };
};

export default useInput;