import React, { useRef, useEffect } from 'react';

const Stage = ({ width, height, backgroundColor = '#87CEEB', platformColor = '#8B4513' }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    // Draw background
    ctx.fillStyle = backgroundColor;
    ctx.fillRect(0, 0, width, height);

    // Draw ground
    ctx.fillStyle = platformColor;
    ctx.fillRect(0, height - 50, width, 50);

    // Draw some platforms
    const platforms = [
      { x: width * 0.1, y: height * 0.7, w: width * 0.2, h: 20 },
      { x: width * 0.5, y: height * 0.5, w: width * 0.3, h: 20 },
      { x: width * 0.7, y: height * 0.3, w: width * 0.2, h: 20 },
    ];

    platforms.forEach(platform => {
      ctx.fillRect(platform.x, platform.y, platform.w, platform.h);
    });

  }, [width, height, backgroundColor, platformColor]);

  return <canvas ref={canvasRef} width={width} height={height} />;
};

export default Stage;