import { useState, useEffect } from 'react';

const useAnimation = (frames, frameDuration) => {
  const [currentFrame, setCurrentFrame] = useState(0);

  useEffect(() => {
    const animationInterval = setInterval(() => {
      setCurrentFrame((prevFrame) => (prevFrame + 1) % frames.length);
    }, frameDuration);

    return () => clearInterval(animationInterval);
  }, [frames.length, frameDuration]);

  return frames[currentFrame];
};

export default useAnimation;