import React from 'react';

const Sword = ({ x, y, length, angle, color }) => {
  const endX = x + length * Math.cos(angle);
  const endY = y + length * Math.sin(angle);

  return (
    <g>
      <line
        x1={x}
        y1={y}
        x2={endX}
        y2={endY}
        stroke={color}
        strokeWidth="3"
      />
      <line
        x1={x - 5 * Math.cos(angle + Math.PI/2)}
        y1={y - 5 * Math.sin(angle + Math.PI/2)}
        x2={x + 5 * Math.cos(angle + Math.PI/2)}
        y2={y + 5 * Math.sin(angle + Math.PI/2)}
        stroke={color}
        strokeWidth="2"
      />
    </g>
  );
};

export default Sword;