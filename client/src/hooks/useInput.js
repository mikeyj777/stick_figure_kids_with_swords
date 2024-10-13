import { useState, useEffect } from 'react';

const useInput = (gameContainerRef) => {
  console.log("gameContainerRef", gameContainerRef);
  const [input, setInput] = useState({
    up: false,
    down: false,
    left: false,
    right: false,
    attack: false,
  });

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (gameContainerRef.current && !gameContainerRef.current.contains(document.activeElement)) {
        return; // If the game container is not focused, don't prevent default
      }

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
  }, [gameContainerRef]);

  return input;
};

export default useInput;