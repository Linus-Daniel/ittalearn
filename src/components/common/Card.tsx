import { motion } from 'framer-motion';
import { ReactNode } from 'react';

type CardProps = {
  children: ReactNode;
  className?: string;
};

export const Card = ({ children, className = '' }: CardProps) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className={`bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl hover:shadow-lg hover:shadow-purple-500/10 transition-all ${className}`}
    >
      {children}
    </motion.div>
  );
};