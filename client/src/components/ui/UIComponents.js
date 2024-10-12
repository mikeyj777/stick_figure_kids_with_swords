import React from 'react';

export const Button = ({ onClick, disabled, children, className }) => {
  const baseClass = 'button';
  const stateClass = disabled ? 'button-disabled' : 'button-primary';
  const fullClassName = `${baseClass} ${stateClass} ${className || ''}`.trim();

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={fullClassName}
    >
      {children}
    </button>
  );
};

export const Input = ({ type = 'text', value, onChange, placeholder, className }) => {
  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={`input ${className || ''}`.trim()}
    />
  );
};

export const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        {children}
        <Button onClick={onClose} className="button-secondary">Close</Button>
      </div>
    </div>
  );
};

export const Tooltip = ({ text, children }) => {
  return (
    <div className="tooltip">
      {children}
      <span className="tooltip-text">{text}</span>
    </div>
  );
};