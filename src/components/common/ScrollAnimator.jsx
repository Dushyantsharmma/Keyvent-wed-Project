import React from 'react';
import { motion } from 'framer-motion';

const ScrollAnimator = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }} // Start invisible and 50px down
      whileInView={{ opacity: 1, y: 0 }} // Animate to visible and original position
      viewport={{ once: true }} // Only animate once
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};

export default ScrollAnimator;