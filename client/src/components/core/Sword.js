import React, { useRef, useEffect } from 'react';

const Sword = ({ x, y, length, angle, color = 'gray' }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    // Clear the canvas
    ctx.clearRect(0, 0, length, length);

    // Save the canvas state
    ctx.save();

    // Move to the center of the canvas
    ctx.translate(length / 2, length / 2);

    // Rotate the canvas
    ctx.rotate(angle);

    // Draw the sword
    ctx.strokeStyle = color;
    ctx.lineWidth = 3;

    // Blade
    ctx.beginPath();
    ctx.moveTo(0, -length / 2);
    ctx.lineTo(0, length / 2 - 10);
    ctx.stroke();

    // Guard
    ctx.beginPath();
    ctx.moveTo(-10, length / 2 - 10);
    ctx.lineTo(10, length / 2 - 10);
    ctx.stroke();

    // Handle
    ctx.beginPath();
    ctx.moveTo(0, length / 2 - 10);
    ctx.lineTo(0, length / 2);
    ctx.stroke();

    // Restore the canvas state
    ctx.restore();
  }, [length, angle, color]);

  return (
    <canvas
      ref={canvasRef}
      width={length}
      height={length}
      style={{ position: 'absolute', left: x, top: y }}
    />
  );
};

export default Sword;