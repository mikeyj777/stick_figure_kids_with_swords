import React, { useState } from 'react';

const TrainingMode = ({ onExit }) => {
  const [comboCount, setComboCount] = useState(0);

  const handleCombo = () => {
    setComboCount(prev => prev + 1);
  };

  return (
    <div className="training-mode">
      <h2>Training Mode</h2>
      <p>Combo Count: {comboCount}</p>
      <button onClick={handleCombo}>Perform Combo</button>
      <button onClick={onExit}>Exit to Main Menu</button>
    </div>
  );
};

export default TrainingMode;