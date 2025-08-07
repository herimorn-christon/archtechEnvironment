import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface SelectOption {
  value: string;
  label: string;
}

interface SelectProps {
  options: SelectOption[];
  value: string;
  onChange: (value: string) => void;
  label?: string;
  placeholder?: string;
  error?: string;
  disabled?: boolean;
  fullWidth?: boolean;
  className?: string;
}

const Select: React.FC<SelectProps> = ({
  options,
  value,
  onChange,
  label,
  placeholder = 'Select an option',
  error,
  disabled = false,
  fullWidth = false,
  className = '',
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const id = `select-${Math.random().toString(36).substring(2, 9)}`;

  const handleSelect = (optionValue: string) => {
    onChange(optionValue);
    setIsOpen(false);
  };

  const selectedOption = options.find(option => option.value === value);

  return (
    <div className={`relative ${fullWidth ? 'w-full' : ''} ${className}`}>
      {label && (
        <label 
          htmlFor={id}
          className="block text-sm font-medium text-neutral-700 mb-1"
        >
          {label}
        </label>
      )}
      
      <button
        id={id}
        type="button"
        className={`
          relative
          flex
          items-center
          justify-between
          w-full
          rounded-lg
          border
          px-3
          py-2
          text-left
          focus:outline-none
          focus:ring-2
          focus:ring-primary-500
          ${disabled ? 'bg-neutral-100 text-neutral-500 cursor-not-allowed' : 'bg-white cursor-pointer'}
          ${error ? 'border-error-500' : 'border-neutral-300'}
        `}
        onClick={() => !disabled && setIsOpen(!isOpen)}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        disabled={disabled}
      >
        <span className={selectedOption ? 'text-neutral-900' : 'text-neutral-400'}>
          {selectedOption ? selectedOption.label : placeholder}
        </span>
        <ChevronDown className="h-5 w-5 text-neutral-400" />
      </button>
      
      {isOpen && (
        <div className="absolute z-10 mt-1 w-full rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <ul
            className="py-1 max-h-60 overflow-auto"
            role="listbox"
            aria-labelledby={id}
          >
            {options.map((option) => (
              <li
                key={option.value}
                className={`
                  cursor-pointer 
                  select-none 
                  px-3 
                  py-2 
                  text-neutral-900
                  hover:bg-primary-50
                  ${value === option.value ? 'bg-primary-100 font-medium' : ''}
                `}
                role="option"
                aria-selected={value === option.value}
                onClick={() => handleSelect(option.value)}
              >
                {option.label}
              </li>
            ))}
          </ul>
        </div>
      )}
      
      {error && (
        <p className="mt-1 text-sm text-error-600">{error}</p>
      )}
    </div>
  );
};

export default Select;