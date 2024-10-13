import { useState, useEffect, useCallback } from 'react';

const useAnimation = (frames, frameDuration) => {
  const [currentFrame, setCurrentFrame] = useState(0);

  const nextFrame = useCallback(() => {
    setCurrentFrame((prevFrame) => (prevFrame + 1) % frames.length);
  }, [frames.length]);

  useEffect(() => {
    const animationInterval = setInterval(nextFrame, frameDuration);
    return () => clearInterval(animationInterval);
  }, [nextFrame, frameDuration]);

  return frames[currentFrame];
};

export default useAnimation;