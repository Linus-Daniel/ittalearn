"use client"
import { motion } from 'framer-motion';
import { ReactNode } from 'react';

type ButtonProps = {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  className?: string;
  onClick?: () => void;
};

export const Button = ({ 
  children, 
  variant = 'primary', 
  className = '',
  onClick 
}: ButtonProps) => {
  const baseClasses = 'px-6 py-3 rounded-lg font-medium transition-all duration-300';
  
  const variantClasses = {
    primary: 'bg-gradient-to-r from-purple-600 to-teal-500 hover:opacity-90 shadow-lg shadow-purple-500/20',
    secondary: 'bg-gray-800 hover:bg-gray-700 border border-gray-700',
    outline: 'bg-transparent border border-white hover:bg-white hover:text-gray-900',
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      onClick={onClick}
    >
      {children}
    </motion.button>
  );
};