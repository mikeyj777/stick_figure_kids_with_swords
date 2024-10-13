import React from 'react';

const ChosenCharacter = ({ character, isSelected, onSelect }) => {
  return (
    <div 
      className={`character-option ${isSelected ? 'selected' : ''}`}
      onClick={() => onSelect(character)}
    >
      <div className="character-avatar" style={{ backgroundColor: character.color }}></div>
      <h3 className="character-name">{character.name}</h3>
      <p className="character-stat">HP: {character.hp}</p>
      <p className="character-stat">Attack: {character.attack}</p>
    </div>
  );
};

export default ChosenCharacter;