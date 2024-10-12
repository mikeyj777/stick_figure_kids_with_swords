import React from 'react';

const Hitbox = ({ x, y, width, height, active }) => {
  // In a real game, you wouldn't typically render the hitbox visually.
  // This is just for demonstration and debugging purposes.
  const style = {
    position: 'absolute',
    left: x,
    top: y,
    width: width,
    height: height,
    border: `2px solid ${active ? 'red' : 'green'}`,
    opacity: 0.5,
  };

  return <div style={style} />;
};

export const checkCollision = (hitbox1, hitbox2) => {
  return (
    hitbox1.x < hitbox2.x + hitbox2.width &&
    hitbox1.x + hitbox1.width > hitbox2.x &&
    hitbox1.y < hitbox2.y + hitbox2.height &&
    hitbox1.y + hitbox1.height > hitbox2.y
  );
};

export default Hitbox;