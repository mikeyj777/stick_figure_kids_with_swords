import React from 'react';

const Hitbox = ({ x, y, width, height, active }) => {
  return (
    <rect
      x={x}
      y={y}
      width={width}
      height={height}
      fill="none"
      stroke={active ? "red" : "green"}
      strokeWidth="2"
      opacity="0.5"
    />
  );
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