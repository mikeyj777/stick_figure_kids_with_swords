import React, { useRef, useEffect } from 'react';

const Character = ({ x, y, width, height, color = 'black' }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    // Clear the canvas
    ctx.clearRect(0, 0, width, height);

    // Draw the stick figure
    ctx.strokeStyle = color;
    ctx.lineWidth = 2;

    // Head
    ctx.beginPath();
    ctx.arc(width / 2, height / 4, height / 8, 0, Math.PI * 2);
    ctx.stroke();

    // Body
    ctx.beginPath();
    ctx.moveTo(width / 2, height / 4 + height / 8);
    ctx.lineTo(width / 2, height * 3 / 4);
    ctx.stroke();

    // Arms
    ctx.beginPath();
    ctx.moveTo(width / 4, height / 2);
    ctx.lineTo(width * 3 / 4, height / 2);
    ctx.stroke();

    // Legs
    ctx.beginPath();
    ctx.moveTo(width / 2, height * 3 / 4);
    ctx.lineTo(width / 4, height);
    ctx.moveTo(width / 2, height * 3 / 4);
    ctx.lineTo(width * 3 / 4, height);
    ctx.stroke();
  }, [width, height, color]);

  return (
    <canvas
      ref={canvasRef}
      width={width}
      height={height}
      style={{ position: 'absolute', left: x, top: y }}
    />
  );
};

export default Character;