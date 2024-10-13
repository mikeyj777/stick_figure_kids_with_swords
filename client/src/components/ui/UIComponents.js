import React from 'react';

export const Button = ({ onClick, disabled, children, className }) => (
  <button
    onClick={onClick}
    disabled={disabled}
    className={`button ${disabled ? 'disabled' : ''} ${className || ''}`}
  >
    {children}
  </button>
);

export const Input = ({ type = 'text', value, onChange, placeholder, className }) => (
  <input
    type={type}
    value={value}
    onChange={onChange}
    placeholder={placeholder}
    className={`input ${className || ''}`}
  />
);

export const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        {children}
        <Button onClick={onClose} className="modal-close">Close</Button>
      </div>
    </div>
  );
};

export const Tooltip = ({ text, children }) => (
  <div className="tooltip">
    {children}
    <span className="tooltip-text">{text}</span>
  </div>
);