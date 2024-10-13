import React, { useState } from 'react';

const characters = [
  { id: 1, name: 'Knight', color: 'silver' },
  { id: 2, name: 'Wizard', color: 'blue' },
  { id: 3, name: 'Archer', color: 'green' },
];

const CharacterSelect = ({ onSelect }) => {
  const [selectedCharacter, setSelectedCharacter] = useState(null);

  const handleSelect = (character) => {
    setSelectedCharacter(character);
    onSelect(character);
  };

  return (
    <div className="character-select">
      <h2>Select Your Character</h2>
      <div className="character-list">
        {characters.map(character => (
          <div
            key={character.id}
            className={`character-option ${selectedCharacter === character ? 'selected' : ''}`}
            onClick={() => handleSelect(character)}
          >
            <div className="character-avatar" style={{ backgroundColor: character.color }}></div>
            <p>{character.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CharacterSelect;