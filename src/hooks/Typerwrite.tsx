import { motion } from 'framer-motion';
import React from 'react';

interface TypewriterProps {
  text: string;
  className?: string;
  speed?: number; // Nuova proprietà per la velocità
}

const Typewriter: React.FC<TypewriterProps> = ({ text, className, speed = 0.01 }) => {
  // Imposta un valore predefinito
  const textArray = text.split('');

  return (
    <div className={className}>
      {textArray.map((char, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: index * speed }} // Usa la proprietà speed
        >
          {char}
        </motion.span>
      ))}
    </div>
  );
};

export default Typewriter;
