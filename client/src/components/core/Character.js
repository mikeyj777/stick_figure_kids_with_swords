import React from 'react';
import Sword from './Sword';

const Character = ({ type, x, y, hp, color, direction }) => {
  const renderAccessory = () => {
    switch(type) {
      case 'Knight':
        return (
          <ellipse
            cx={x - 18}
            cy={y - 5}
            rx={8}
            ry={12}
            fill={color}
          />
        );
      case 'Wizard':
        return (
          <g>
            <line x1={x + 15} y1={y - 25} x2={x + 15} y2={y + 15} stroke="#8B4513" strokeWidth="2" />
            <circle cx={x + 15} cy={y - 25} r={5} fill="#00FFFF" />
          </g>
        );
      case 'Archer':
        return (
          <g>
            <rect x={x - 5} y={y - 15} width={10} height={25} fill="#8B4513" />
            {[0, 1, 2].map(i => (
              <line
                key={i}
                x1={x - 3 + i * 3}
                y1={y - 15}
                x2={x - 3 + i * 3}
                y2={y - 25}
                stroke="#000000"
                strokeWidth="1"
              />
            ))}
          </g>
        );
      default:
        return null;
    }
  };

  return (
    <g>
      {/* Head */}
      <circle cx={x} cy={y - 30} r={10} stroke={color} fill="none" strokeWidth="2" />
      
      {/* Body */}
      <line x1={x} y1={y - 20} x2={x} y2={y + 10} stroke={color} strokeWidth="2" />
      
      {/* Arms */}
      <line x1={x - 15} y1={y - 10} x2={x + 15} y2={y - 10} stroke={color} strokeWidth="2" />
      
      {/* Legs */}
      <line x1={x} y1={y + 10} x2={x - 10} y2={y + 30} stroke={color} strokeWidth="2" />
      <line x1={x} y1={y + 10} x2={x + 10} y2={y + 30} stroke={color} strokeWidth="2" />
      
      {/* Character-specific accessory */}
      {renderAccessory()}
      
      {/* Sword */}
      <Sword x={x + 15} y={y - 10} length={30} angle={direction} color={color} />
      
      {/* HP Bar */}
      <rect x={x - 20} y={y - 45} width={40} height={5} fill="red" />
      <rect x={x - 20} y={y - 45} width={40 * (hp / 100)} height={5} fill="green" />
    </g>
  );
};

export default Character;