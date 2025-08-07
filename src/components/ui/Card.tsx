import React from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  interactive?: boolean;
  elevation?: 'none' | 'low' | 'medium' | 'high';
}

const Card: React.FC<CardProps> = ({
  children,
  className = '',
  onClick,
  interactive = false,
  elevation = 'medium',
}) => {
  const elevationStyles = {
    none: '',
    low: 'shadow-subtle',
    medium: 'shadow-elevated',
    high: 'shadow-floating',
  };

  const baseStyles = `
    bg-white 
    rounded-xl 
    overflow-hidden
    ${elevationStyles[elevation]}
    ${interactive ? 'cursor-pointer transition-all duration-200 hover:shadow-floating' : ''}
    ${className}
  `;

  const motionProps = interactive
    ? {
        whileHover: { y: -4 },
        whileTap: { y: 0 },
      }
    : {};

  return (
    <motion.div
      className={baseStyles}
      onClick={onClick}
      {...motionProps}
    >
      {children}
    </motion.div>
  );
};

export default Card;