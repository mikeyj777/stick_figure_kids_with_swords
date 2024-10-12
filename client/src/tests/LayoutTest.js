import React, { useState } from 'react';
import { Button, Input, Modal, Tooltip } from '../components/ui/UIComponents';

const LayoutTest = () => {
  const [inputValue, setInputValue] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleInputChange = (e) => setInputValue(e.target.value);
  const toggleModal = () => setIsModalOpen(!isModalOpen);

  return (
    <div className="App">
      <div className="container">
        <h1 className="title">UI Components Layout Test</h1>
        
        <div className="section">
          <h2 className="subtitle">Button Component</h2>
          <div className="button-container">
            <Button onClick={() => alert('Primary clicked!')}>
              Primary Button
            </Button>
            <Button onClick={() => alert('Secondary clicked!')} className="button-secondary">
              Secondary Button
            </Button>
            <Button disabled>
              Disabled Button
            </Button>
          </div>
        </div>

        <div className="section">
          <h2 className="subtitle">Input Component</h2>
          <div className="input-container">
            <Input 
              value={inputValue} 
              onChange={handleInputChange} 
              placeholder="Enter some text"
            />
            <p className="input-value">Input value: {inputValue}</p>
          </div>
        </div>

        <div className="section">
          <h2 className="subtitle">Modal Component</h2>
          <div className="modal-container">
            <Button onClick={toggleModal}>Open Modal</Button>
            <Modal isOpen={isModalOpen} onClose={toggleModal}>
              <h3 className="modal-title">Modal Content</h3>
              <p>This is some content inside the modal.</p>
            </Modal>
          </div>
        </div>

        <div className="section">
          <h2 className="subtitle">Tooltip Component</h2>
          <div className="tooltip-container">
            <Tooltip text="This is a tooltip!">
              <span className="tooltip-trigger">Hover over me</span>
            </Tooltip>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LayoutTest;