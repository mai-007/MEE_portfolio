'use client'

import React from 'react';
import { motion } from 'framer-motion';
import styles from './AnimatedGradient.css';

export default function AnimatedGradientBackground() {
  return (
    <motion.div
      style={{
        width: '100vw',
        height: '100vh',
        background: 'linear-gradient(45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)',
        backgroundSize: '400% 400%',
        filter: 'blur(1000px) opacity(0.5)',
        position: 'fixed',
        animation: 'gradientAnimation 15s ease infinite',
      }}
      className={styles.bg}
    />
  );
};
