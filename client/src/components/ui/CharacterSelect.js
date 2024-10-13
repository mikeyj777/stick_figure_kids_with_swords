import React, { useState } from 'react';
import ChosenCharacter from './ChosenCharacter';
import { Button } from './UIComponents';

const characters = [
  { id: 1, name: 'Knight', color: '#C0C0C0', hp: 100, attack: 20 },
  { id: 2, name: 'Wizard', color: '#4B0082', hp: 75, attack: 30 },
  { id: 3, name: 'Archer', color: '#228B22', hp: 85, attack: 25 },
];

const CharacterSelect = ({ onSelect, onBack }) => {
  const [selectedCharacter, setSelectedCharacter] = useState(null);

  const handleSelect = (character) => {
    setSelectedCharacter(character);
  };

  const handleConfirm = () => {
    if (selectedCharacter) {
      onSelect(selectedCharacter);
    }
  };

  return (
    <div className="character-select">
      <h2 className="select-title">Select Your Character</h2>
      <div className="character-grid">
        {characters.map(character => (
          <ChosenCharacter
            key={character.id}
            character={character}
            isSelected={selectedCharacter?.id === character.id}
            onSelect={handleSelect}
          />
        ))}
      </div>
      <div className="button-group">
        <Button onClick={onBack}>Back</Button>
        <Button onClick={handleConfirm} disabled={!selectedCharacter}>Confirm</Button>
      </div>
    </div>
  );
};

export default CharacterSelect;