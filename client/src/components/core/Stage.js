import React from 'react';

const Stage = ({ width, height, obstacles }) => {
  return (
    <svg width={width} height={height}>
      <rect width={width} height={height} fill="#87CEEB" />
      <rect y={height - 50} width={width} height={50} fill="#8B4513" />
      {obstacles.map((obstacle, index) => (
        <rect
          key={index}
          x={obstacle.x}
          y={obstacle.y}
          width={obstacle.width}
          height={obstacle.height}
          fill="#A0522D"
        />
      ))}
    </svg>
  );
};

export default Stage;